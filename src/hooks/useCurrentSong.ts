import { useState } from "react"
import type { Song } from "../services/LocalDb"

const useCurrentSong = () => {
    const [currentSong, setCurrentSong] = useState<Song | null>(null)

    return {
        currentSong,
        setCurrentSong
    }
}

export default useCurrentSong
