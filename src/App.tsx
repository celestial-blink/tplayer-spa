import './App.css'
import ProgressPlayer from './components/ProgressPlayer'
import Presentation from './components/Presentation'
import SectionSongs from './components/SectionSongs'
import ListSongs from './components/ListSongs'
import Controls from './components/Controls'
import useCurrentSong from './hooks/useCurrentSong'
import SongContext from './context/songContext'

function App() {
    const { currentSong, setCurrentSong } = useCurrentSong()

    return (
        <SongContext value={{ current_song: currentSong, set_current_song: setCurrentSong }}>
            <section className="flex flex-col md:flex-row bg-theme-950 border-b border-theme-800">
                <aside className='w-full md:w-2/5 lg:flex-1 lg:max-w-100 bg-theme-950 p-4 md:h-screen overflow-auto flex flex-col gap-4 md:sticky md:top-0'>
                    <Presentation />
                    <SectionSongs title="Ultimas canciones:" />
                    <SectionSongs title="Favoritas:" />
                </aside>
                <main className='w-full md:w-3/5 lg:flex-1 relative flex flex-col h-full md:h-screen'>
                    <div className='sticky top-0 z-10 mx-4 md:mx-0'>
                        <Controls />
                    </div>
                    <div className='flex-1'>
                        <ListSongs />
                    </div>
                    <div className="fixed md:sticky bottom-0 left-0 right-0">
                        <ProgressPlayer />
                    </div>
                </main>
            </section>
        </SongContext>
    )
}

export default App
