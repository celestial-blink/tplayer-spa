import type { FC } from "react"
import type { Props } from "./types"

const ProgressPlayer: FC<Props> = ({ title, duration, current_time }) => {

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds}`
    }

    return (
        <div className="bg-theme-900/95 shadow p-4 flex flex-col md:flex-row gap-2 md:gap-4 h-48 md:h-24 items-center">
            <button className="order-1 md:order-0 bg-white hover:bg-theme-100 cursor-pointer p-4 rounded-full size-14 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-theme-950" width={32} height={32} viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>
            </button>
            <div className="flex-1 flex flex-col gap-2 w-full">
                <h3 className="text-lg w-full text-center md:text-left">{title}</h3>
                <div className="flex flex-col md:flex-row w-full items-center gap-2">
                    <input type="range" className="flex-1 w-full h-2 rounded-lg appearance-none bg-slate-500 accent-purple-200 cursor-pointer" name="progress" id="progress" min={0} max={duration} defaultValue={current_time} />
                    <p className="text-sm w-20 text-center md:text-right">{formatTime(current_time)} / {formatTime(duration)}</p>
                </div>
            </div>
        </div>
    )
}

export default ProgressPlayer
