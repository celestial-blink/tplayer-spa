import { useState } from "react"
import { parseBlob, type IAudioMetadata } from "music-metadata"

const useMetadata = () => {
    const [metadata, setMetadata] = useState<IAudioMetadata | null>(null)
    const [error, setError] = useState<Error | null>(null)

    const get_metadata = async (url: string) => {
        try {
            const response = await fetch(url)
            const blob = await response.blob()
            const metadata = await parseBlob(blob)
            setMetadata(metadata)
        } catch (error) {
            setError(error as Error)
        }
    }

    return { metadata, error, get_metadata }
}

export default useMetadata
