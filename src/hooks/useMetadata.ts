import { useState } from "react"
import { parseBlob } from "music-metadata"

const useMetadata = () => {
    const [metadata, setMetadata] = useState<any>(null)
    const [error, setError] = useState<Error | null>(null)

    const getMetadata = async (url: string) => {
        try {
            const response = await fetch(url)
            const blob = await response.blob()
            const metadata = await parseBlob(blob)
            setMetadata(metadata)
        } catch (error) {
            setError(error as Error)
        }
    }

    return { metadata, error, getMetadata }
}

export default useMetadata
