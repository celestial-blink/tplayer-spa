import AudioForm from "../AudioForm"
import useDialog from "../../hooks/useDialog"
import Dialog from "../Dialog"

const Controls = () => {

    const { open_dialog, open, close_dialog } = useDialog()

    return (
        <>
            <div className="flex flex-col sm:flex-row gap-4 bg-theme-900/95 md:bg-theme-950/95 p-4 rounded-md text-sm">
                <fieldset className="flex-1">
                    <input type="search" className="w-full bg-theme-950 md:bg-theme-900 p-4 rounded-md outline-none" name="search" id="search" placeholder="Buscar" />
                </fieldset>
                <fieldset className="flex-1 sm:flex-none">
                    <button type="button" className="w-full bg-sky-600 p-4 rounded-md cursor-pointer" onClick={() => open_dialog()}>
                        Agregar nuevo
                    </button>
                </fieldset>
            </div>

            <Dialog open={open} on_close={() => close_dialog()}>
                <AudioForm title="Agregar nuevo audio" on_submit={() => close_dialog()} />
            </Dialog>
        </>
    )
}

export default Controls
