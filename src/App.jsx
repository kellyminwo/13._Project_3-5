import React from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'

export default function App() {

  const [searchValue, setSearchValue] = React.useState('')
  const [tracks, setTracks] = React.useState([])

    React.useEffect(() => {
        fetch('/api/tracks')
            .then(res => res.json())
            .then(data => setTracks(data.tracks))
    }, [])

  return (
    <>
    <header>
      <h1>Jammming</h1>
      <p>Create a playlist with your favorite songs!</p>
    </header>
    <main>
      <SearchBar handleSearchValue={ value => setSearchValue(value) } />
      <section className="lists-container">
        <SearchResults searchValue={ searchValue } tracks={ tracks } />
        <Playlist />
      </section>
    </main>
    </>
  )
}
