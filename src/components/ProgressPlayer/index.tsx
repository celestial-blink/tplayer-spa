import { useContext, useEffect, useRef, useState, type FC } from "react"

import SongContext from "../../context/songContext"

const ProgressPlayer: FC = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const { current_song } = useContext(SongContext);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds}`
    }

    const handle_play = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
    }

    const handle_seek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.currentTime = Number(e.target.value);
        if (currentTime === current_song?.duration) {
            audio.pause();
            setIsPlaying(false);
        }
    }

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
        };

        audio.addEventListener("timeupdate", handleTimeUpdate);

        return () => {
            audio.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, []);


    return (
        <>
            <audio src={current_song?.url} className="hidden" autoPlay={true} controls={false} ref={audioRef} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}></audio>
            {
                current_song && (
                    <div className="bg-theme-900/95 shadow p-4 flex flex-col md:flex-row gap-2 md:gap-4 h-48 md:h-24 items-center">
                        <button className="order-1 md:order-0 bg-white hover:bg-theme-100 cursor-pointer p-4 rounded-full size-14 flex items-center justify-center" onClick={handle_play}>
                            {
                                isPlaying ?
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-theme-950" width={32} height={32} viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12" /><path d="M14 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12" /></svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-theme-950" width={32} height={32} viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>
                            }
                        </button>
                        <div className="flex-1 flex flex-col gap-2 w-full">
                            <h3 className="text-lg w-full text-center md:text-left">{current_song.title}</h3>
                            <div className="flex flex-col md:flex-row w-full items-center gap-2">
                                <input type="range" className="flex-1 w-full h-2 rounded-lg appearance-none bg-slate-500 accent-purple-200 cursor-pointer" name="progress" id="progress" min={0} max={Math.round(current_song.duration || 0)} value={currentTime} onChange={handle_seek} />
                                <p className="text-sm w-20 text-center md:text-right">{formatTime(currentTime)} / {formatTime(current_song.duration || 0)}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </>

    )
}

export default ProgressPlayer
