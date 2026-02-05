import { useState } from "react"

const useDialog = () => {
    const [open, setOpen] = useState(false)

    const open_dialog = (callback?: () => void) => {
        setOpen(true)
        callback?.()
    }
    const close_dialog = (callback?: () => void) => {
        setOpen(false)
        callback?.()
    }

    return {
        open,
        open_dialog,
        close_dialog
    }
}

export default useDialog
