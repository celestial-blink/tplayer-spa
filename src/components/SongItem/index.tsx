import { useContext, type FC } from "react"
import type { Props } from "./types"
import SongContext from "../../context/songContext";

const SongItem: FC<Props> = ({ song }) => {

    const { set_current_song } = useContext(SongContext);

    const format_time = (time: number) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }

    const formate_date = (date: Date) => {
        return date.toLocaleDateString('es-PE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC',
            hour: '2-digit',
            minute: '2-digit',
        })
    }

    const handle_click = () => {
        set_current_song({
            id: song.id,
            title: song.title,
            url: song.url,
            duration: song.duration,
            image: song.image,
            create_at: song.create_at,
        })
    }

    return (
        <div className="group bg-theme-800 px-6 py-4 rounded-xl flex items-center gap-4 text-sm group hover:bg-theme-700 cursor-pointer" onClick={handle_click}>
            <div className="flex-none">
                <img src={song.image} alt={song.title} className="size-32 rounded-md" />
            </div>
            <div className="flex-1">
                <p className="text-slate-300 text-sm">{format_time(song.duration)}</p>
                <h3 className="text-base font-bold text-white">{song.title}</h3>
                <p className="text-slate-300 text-sm">Agregado el {song.create_at ? formate_date(song.create_at) : ""}</p>
            </div>
            <div className="flex-none p-2 bg-transparent rounded-full group-hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-white group-hover:text-theme-950" width={20} height={20} viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>
            </div>
        </div>
    )
}

export default SongItem
