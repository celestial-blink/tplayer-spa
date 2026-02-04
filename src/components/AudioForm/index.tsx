import { useEffect, useState } from "react"
import type { FC } from "react"

import type { Props } from "./types"
import useMetadata from "../../hooks/useMetadata"

const AudioForm: FC<Props> = ({ title: initial_title }) => {
    const [url, setUrl] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)
    const [title, setTitle] = useState(initial_title)
    const [duration, setDuration] = useState(0)

    const { metadata, error, getMetadata } = useMetadata()

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value)
        setIsLoaded(false) // Reset loaded state when URL changes
        getMetadata(e.target.value)
    }

    const handleAudioLoad = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
        setIsLoaded(true)
        setDuration(e.currentTarget.duration)
    }

    const handleAudioError = () => {
        setIsLoaded(false)
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isLoaded) {
            console.log({ url, title, duration })
            // Logic to save the song would go here
        }
    }

    useEffect(() => {
        console.log(metadata);
    }, [metadata])

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-theme-800 p-6 rounded-xl">
            <legend className="text-white text-sm font-semibold">{initial_title}</legend>
            <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-semibold">Audio URL</label>
                <input
                    type="text"
                    value={url}
                    onChange={handleUrlChange}
                    className="bg-theme-900 text-white px-4 py-2 rounded-lg border border-theme-700 focus:outline-none focus:border-theme-500"
                    placeholder="https://example.com/song.mp3"
                />
            </div>

            {/* Hidden audio element for validation */}
            {url && (
                <audio
                    src={url}
                    onLoadedMetadata={handleAudioLoad}
                    onError={handleAudioError}
                    className="hidden"
                />
            )}

            {isLoaded && (
                <>
                    <div className="flex flex-col gap-2">
                        <label className="text-white text-sm font-semibold">Título</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="bg-theme-900 text-white px-4 py-2 rounded-lg border border-theme-700 focus:outline-none focus:border-theme-500"
                            placeholder="Song Title"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-white text-theme-950 font-bold py-2 px-4 rounded-lg hover:bg-slate-200 transition-colors mt-2"
                    >
                        Guardar
                    </button>
                </>
            )}
        </form>
    )
}

export default AudioForm
