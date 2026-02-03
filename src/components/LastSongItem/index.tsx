import type { FC } from "react"
import type { Props } from "./types"

const LastSongItem: FC<Props> = ({ title }) => {
    return (
        <div className="bg-theme-900 md:bg-theme-950 px-4 py-2 rounded-md flex gap-2 text-sm group hover:bg-theme-600 md:hover:bg-theme-900 cursor-pointer">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:hidden" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M9 17v-13h10v13" /><path d="M9 8h10" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="hidden group-hover:block" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 4v16l13 -8l-13 -8" /></svg>
            </div>
            <h3 className="text-slate-200">{title}</h3>
        </div>
    )
}

export default LastSongItem
