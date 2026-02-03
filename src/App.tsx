import './App.css'
import ProgressPlayer from './components/ProgressPlayer'
import Presentation from './components/Presentation'
import SectionSongs from './components/SectionSongs'
import ListSongs from './components/ListSongs'
import Controls from './components/Controls'

import AudioForm from './components/AudioForm'

function App() {

    return (
        <section className="flex flex-col md:flex-row bg-theme-950 border-b border-theme-800">
            <aside className='w-full md:w-2/5 lg:w-1/4 bg-theme-950 p-4 md:h-screen overflow-auto flex flex-col gap-4 md:sticky md:top-0'>
                <Presentation />
                <AudioForm />
                <SectionSongs title="Ultimas canciones:" />
                <SectionSongs title="Favoritas:" />
            </aside>
            <main className='w-full md:w-3/5 lg:w-3/4 relative flex flex-col h-full'>
                <div className='sticky top-0 z-10 mx-4 md:mx-0'>
                    <Controls />
                </div>
                <div className='flex-1'>
                    <ListSongs />
                </div>
                <div className='fixed md:sticky bottom-0 left-0 right-0'>
                    <ProgressPlayer title="Canción actual" duration={100} current_time={50} />
                </div>
            </main>
        </section>
    )
}

export default App
