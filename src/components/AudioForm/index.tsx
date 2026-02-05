import { useEffect, useState } from "react"
import type { FC } from "react"

import type { Props } from "./types"
import useMetadata from "../../hooks/useMetadata"
import useLocalDb from "../../hooks/useLocalDb"

import { uint8array_to_base64 } from "../../helpers/uint8array_to_base64"

const AudioForm: FC<Props> = ({ title: initial_title }) => {
    const [url, setUrl] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)
    const [title, setTitle] = useState(initial_title)
    const [duration, setDuration] = useState(0)

    const { metadata, error, get_metadata } = useMetadata()
    const { add_song } = useLocalDb()

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value)
        setIsLoaded(false) // Reset loaded state when URL changes
        get_metadata(e.target.value)
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

            let image = undefined

            if (metadata?.common.picture?.[0].data) {
                const base_64 = uint8array_to_base64(metadata.common.picture[0].data)
                image = `data:${metadata.common.picture[0].format};base64,${base_64}`
            }

            add_song({
                title,
                url,
                duration,
                image: image,
            })
        }
    }

    useEffect(() => {
        console.log(metadata);
    }, [metadata])

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-theme-800 p-6 rounded-xl">
            <legend className="text-white text-lg font-semibold">{initial_title}</legend>
            <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-semibold">Audio URL</label>
                <input
                    type="url"
                    className="bg-theme-950 text-white px-4 py-2 rounded-lg border border-theme-700 focus:outline-none focus:border-theme-500"
                    value={url}
                    onChange={handleUrlChange}
                    placeholder="https://example.com/song.mp3"
                />
                {error && <p className="text-red-500">{error.message}</p>}
            </div>

            {url && (
                <audio
                    className="hidden"
                    src={url}
                    onLoadedMetadata={handleAudioLoad}
                    onError={handleAudioError}
                />
            )}

            {(isLoaded && !error) && (
                <>
                    <div className="flex flex-col gap-2">
                        <label className="text-white text-sm font-semibold">Título</label>
                        <input
                            type="text"
                            className="bg-theme-950 text-white px-4 py-2 rounded-lg border border-theme-700 focus:outline-none focus:border-theme-500"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Song Title"
                        />
                    </div>


                    <button
                        type="submit"
                        className="flex-1 bg-white text-theme-950 p-2 rounded-lg hover:bg-slate-200 transition-colors"
                    >
                        Guardar
                    </button>
                </>
            )}
        </form>
    )
}

export default AudioForm
