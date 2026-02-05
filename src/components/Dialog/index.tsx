import { useEffect, type FC, type PropsWithChildren, useRef } from "react"

const Dialog: FC<PropsWithChildren> = ({ children }) => {

    const ref = useRef<HTMLDialogElement>(null);

    const handle_open_dialog = () => {
        ref.current?.showModal();
        document.body.classList.add("overflow-hidden");
    }

    const handle_close_dialog = () => {
        document.body.classList.remove("overflow-hidden");
    }

    useEffect(() => {
        return () => {
            document.body.classList.remove("overflow-hidden");
        }
    }, [])


    return (
        <dialog className="fixed m-auto left-0 right-0 bg-theme-800 rounded-lg p-2 backdrop:bg-black/50 w-96" ref={ref}>
            <form method="dialog" className="flex justify-end">
                <button type="submit" onClick={handle_close_dialog}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                </button>
            </form>
            {children}
        </dialog>
    )
}

export default Dialog
