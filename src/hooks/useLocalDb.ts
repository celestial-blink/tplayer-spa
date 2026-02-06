import { useState } from "react"

import { db, type Song } from "../services/LocalDb"

const useLocalDb = () => {

    const [songs, setSongs] = useState<Song[]>([]);
    const [error, setError] = useState<Error | null>(null)

    const [isPendingSongs, setIsPendingSongs] = useState(false);

    const getStoreSongs = () => {
        setIsPendingSongs(true);
        const tx = db?.transaction("songs", "readonly");
        const store = tx?.objectStore('songs');

        const result = store?.getAll();

        if (result) {
            result.onsuccess = () => {
                setSongs(result.result);
            }
        } else {
            setError(new Error("Error al obtener las canciones"));
        }
        setIsPendingSongs(false);
    }

    const addSong = (song: Song) => {
        const tx = db?.transaction("songs", "readwrite");
        const store = tx?.objectStore('songs');
        const result = store?.add(song);

        if (result) {
            result.onsuccess = () => {
                console.log("Canción agregada");
            }
        } else {
            setError(new Error("Error al agregar la canción"));
        }
    }

    const updateSong = (song: Song) => {
        const tx = db?.transaction("songs", "readwrite");
        const store = tx?.objectStore('songs');
        const result = store?.put(song);

        if (result) {
            result.onsuccess = () => {
                console.log("Canción actualizada");
            }
        } else {
            setError(new Error("Error al actualizar la canción"));
        }
    }

    const deleteSong = (id: number) => {
        const tx = db?.transaction("songs", "readwrite");
        const store = tx?.objectStore('songs');
        const result = store?.delete(id);

        if (result) {
            result.onsuccess = () => {
                console.log("Canción eliminada");
            }
        } else {
            setError(new Error("Error al eliminar la canción"));
        }
    }

    return {
        songs,
        error,
        getStoreSongs,
        isPendingSongs,
        addSong,
        deleteSong,
        updateSong,
    }
}

export default useLocalDb
