import React from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'

export const PlaylistContext = React.createContext()

// Use useContext to pass down a newly created state for the tracks clicked in the search results that will then be reflected in the playlist.

export default function App() {

  const [searchValue, setSearchValue] = React.useState('')
  const [tracks, setTracks] = React.useState([])
  const [playlist, setPlaylist] = React.useState([])

    React.useEffect(() => {
        fetch('/api/tracks')
            .then(res => res.json())
            .then(data => setTracks(data.tracks))
    }, [])

  return (
    <>
    <header>
      <img src="jammming_logo-white.svg" className="logo" type="image/svg+xml" alt="Jammming Logo" />
      <p>Create a playlist with your favorite songs!</p>
    </header>
    <main>
      <SearchBar searchValue={searchValue} handleSearchValue={ value => setSearchValue(value) } />
      <section className="lists-container">
        <PlaylistContext value={{ playlist, setPlaylist }}>
          <SearchResults searchValue={ searchValue } tracks={ tracks } />
          <Playlist />
        </PlaylistContext>
      </section>
    </main>
    </>
  )
}
