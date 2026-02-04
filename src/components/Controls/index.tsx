import { useRef } from "react"

import AudioForm from "../AudioForm"

const Controls = () => {

    const ref = useRef<HTMLDialogElement>(null);

    return (
        <>
            <div className="flex flex-col sm:flex-row gap-4 bg-theme-900/95 md:bg-theme-950/95 p-4 rounded-md text-sm">
                <fieldset className="flex-1">
                    <input type="search" className="w-full bg-theme-950 md:bg-theme-900 p-4 rounded-md outline-none" name="search" id="search" placeholder="Buscar" />
                </fieldset>
                <fieldset className="flex-1 sm:flex-none">
                    <button type="button" className="w-full bg-sky-600 p-4 rounded-md cursor-pointer" onClick={() => ref.current?.showModal()}>
                        Agregar nuevo
                    </button>
                </fieldset>
            </div>
            <dialog className="fixed m-auto left-0 right-0 backdrop:bg-black/50 w-96" ref={ref} open={false}>
                <AudioForm title="Agregar nuevo audio" />
            </dialog>
        </>
    )
}

export default Controls
