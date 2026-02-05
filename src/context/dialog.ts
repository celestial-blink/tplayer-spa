import { createContext, useState, type FC, type PropsWithChildren } from "react";


interface DialogContextType {
    open: boolean
    open_dialog: () => void
    close_dialog: () => void
}

export const DialogContext = createContext<DialogContextType>({
    open: false,
    open_dialog: () => { },
    close_dialog: () => { },
})
