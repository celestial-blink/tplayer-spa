import { useState } from "react"
import type { FC, MouseEvent } from "react"

import type { Props } from "./types"
import useMetadata from "../../hooks/useMetadata"
import useLocalDb from "../../hooks/useLocalDb"

import { uint8array_to_base64 } from "../../helpers/uint8array_to_base64"

const AudioForm: FC<Props> = ({ title: initial_title, on_submit }) => {
    const [url, setUrl] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)
    const [title, setTitle] = useState("")
    const [duration, setDuration] = useState(0)
    const [image, setImage] = useState<string | undefined>(undefined)
    const [loadMetadata, setLoadMetadata] = useState(false);

    const { metadata, error, get_metadata } = useMetadata()
    const { add_song } = useLocalDb()

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value)
        setIsLoaded(false) // Reset loaded state when URL changes
    }


    const handleAudioLoad = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
        setIsLoaded(true)
        setDuration(e.currentTarget.duration)
        let image = undefined

        console.log(metadata);


        if (metadata?.common.picture?.[0].data) {
            const base_64 = uint8array_to_base64(metadata.common.picture[0].data)
            image = `data:${metadata.common.picture[0].format};base64,${base_64}`
        }
        setImage(image)
        setTitle(metadata?.common.title || initial_title)
    }

    const handleAudioError = () => {
        setIsLoaded(false)
    }

    const handle_get_metadata = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setLoadMetadata(true)
        get_metadata(url)
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isLoaded) {
            console.log({ url, title, duration, image })

            add_song({
                title,
                url,
                duration,
                image,
                create_at: new Date(),
            })

            on_submit?.()
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-theme-800 p-6 rounded-xl">
            <legend className="text-white text-lg font-semibold">{initial_title}</legend>
            <div className="flex flex-col gap-2">
                <label className="text-slate-100 text-sm font-semibold">Audio URL</label>
                <div className="relative">
                    <input
                        type="url"
                        className="bg-theme-950 text-white px-4 py-2 w-full rounded-lg border border-theme-700 focus:outline-none focus:border-theme-500 pr-10"
                        value={url}
                        onChange={handleUrlChange}
                        placeholder="https://example.com/song.mp3"
                    />
                    <button type="button" className="bg-theme-800 p-1 rounded-md hover:bg-slate-700 size-6 flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer" onClick={handle_get_metadata}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" /></svg>
                    </button>
                </div>
                {error && <p className="text-red-500">{error.message}</p>}
            </div>

            {(url && loadMetadata) && (
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
                        <label className="text-slate-100 text-sm font-semibold">Título</label>
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
