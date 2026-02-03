import type { FC } from "react"
import type { Props } from "./types"

import Song from "../LastSongItem"

const SectionSongs: FC<Props> = ({ title }) => {
    const songs = [
        {
            title: "Canción 1",
        },
        {
            title: "Canción 2",
        },
        {
            title: "Canción 3",
        },
        {
            title: "Canción 4",
        },
        {
            title: "Canción 5",
        },
        {
            title: "Canción 6",
        },
        {
            title: "Canción 7",
        },
        {
            title: "Canción 8",
        },
        {
            title: "Canción 9",
        },
        {
            title: "Canción 10",
        },
    ]

    return (
        <div className="md:p-4 rounded-xl text-white flex flex-col gap-2 flex-1 overflow-auto h-10 md:h-screen">
            <h2 className="text-xl font-bold sticky -top-4 bg-theme-950">{title}</h2>
            <details className="bg-theme-900 p-4 rounded-xl md:hidden">
                <summary className="cursor-pointer select-none">Ver mas</summary>
                <br />
                <ul className="flex flex-col gap-2">
                    {
                        songs.map(song => <Song key={song.title} title={song.title} />)
                    }
                </ul>
            </details>
            <ul className="hidden md:flex flex-col gap-2">
                {
                    songs.map(song => <Song key={song.title} title={song.title} />)
                }
            </ul>
        </div>
    )
}

export default SectionSongs
