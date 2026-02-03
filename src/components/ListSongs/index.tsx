import SongItem from "../SongItem"

const ListSongs = () => {
    const songs = [
        {
            title: "Canción 1",
            duration: 100,
            image: "/cover1.webp",
            create_at: "2026-02-03T17:01:29-05:00",
        },
        {
            title: "Canción 2",
            duration: 100,
            image: "/cover2.webp",
            create_at: "2026-02-03T17:01:29-05:00",
        },
        {
            title: "Canción 3",
            duration: 100,
            image: "/cover3.webp",
            create_at: "2026-02-03T17:01:29-05:00",
        },
        {
            title: "Canción 4",
            duration: 100,
            image: "/cover1.webp",
            create_at: "2026-02-03T17:01:29-05:00",
        },
        {
            title: "Canción 5",
            duration: 100,
            image: "/cover2.webp",
            create_at: "2026-02-03T17:01:29-05:00",
        },
        {
            title: "Canción 6",
            duration: 100,
            image: "/cover3.webp",
            create_at: "2026-02-03T17:01:29-05:00",
        },
        {
            title: "Canción 7",
            duration: 100,
            image: "/cover1.webp",
            create_at: "2026-02-03T17:01:29-05:00",
        },
        {
            title: "Canción 8",
            duration: 100,
            image: "/cover2.webp",
            create_at: "2026-02-03T17:01:29-05:00",
        },
        {
            title: "Canción 9",
            duration: 100,
            image: "/cover3.webp",
            create_at: "2026-02-03T17:01:29-05:00",
        },
        {
            title: "Canción 10",
            duration: 100,
            image: "/cover1.webp",
            create_at: "2026-02-03T17:01:29-05:00",
        },
    ]
    return (
        <div className="bg-theme-950 p-4 rounded-xl text-white flex flex-col gap-2 flex-1 overflow-auto space-y-2">
            <h2 className="text-2xl sticky top-0">Mis canciones:</h2>
            <ul className="flex flex-col gap-4">
                {
                    songs.map(song =>
                        <SongItem
                            key={song.title}
                            title={song.title}
                            duration={song.duration}
                            image={song.image}
                            create_at={song.create_at}
                        />
                    )
                }
            </ul>
        </div>
    )
}

export default ListSongs
