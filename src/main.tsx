import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { DialogContext } from './context/dialog.ts'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <DialogContext value={{}}>
            <App />
        </DialogContext>
    </StrictMode>,
)
