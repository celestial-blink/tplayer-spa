import { createContext } from "react"
import type { Song } from "../services/LocalDb"

interface SongContextType {
    current_song: Song | null
    set_current_song: (song: Song) => void
}

const SongContext = createContext<SongContextType>({
    current_song: null,
    set_current_song: () => { }
})

export default SongContext
