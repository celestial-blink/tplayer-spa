import { useState } from "react"

const useDialog = () => {
    const [open, setOpen] = useState(false)

    const openDialog = (callback?: () => void) => {
        setOpen(true)
        callback?.()
    }
    const closeDialog = (callback?: () => void) => {
        setOpen(false)
        callback?.()
    }

    return {
        open,
        openDialog,
        closeDialog
    }
}

export default useDialog
