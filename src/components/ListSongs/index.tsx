import { useEffect } from "react"

import useLocalDb from "../../hooks/useLocalDb"
import SongItem from "../SongItem"

const ListSongs = () => {
    const { getStoreSongs, songs, isPendingSongs } = useLocalDb()

    useEffect(() => {
        getStoreSongs();
    }, [])

    return (
        <div className="bg-theme-950 p-4 rounded-xl text-white flex flex-col gap-2 flex-1 overflow-auto space-y-2">
            <h2 className="text-2xl sticky top-0">Mis canciones:</h2>
            {isPendingSongs && <p>Cargando canciones...</p>}
            {
                !isPendingSongs && songs.length === 0 && <p>No hay canciones</p>
            }
            {
                !isPendingSongs && songs.length > 0 && (
                    <ul className="flex flex-col gap-4">
                        {
                            songs.map(song =>
                                <SongItem
                                    key={song.id}
                                    song={song}
                                />
                            )
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default ListSongs
