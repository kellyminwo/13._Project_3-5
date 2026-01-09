import React from 'react'
import 'animate.css'
import Tracklist from './Tracklist'

export default function SearchResults({ searchValue, tracks }) {

    const results = tracks.filter(track => {
        return (
            track.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            track.artist.toLowerCase().includes(searchValue.toLowerCase()) ||
            track.album.toLowerCase().includes(searchValue.toLowerCase())
        )
    })
    console.log(results)

    return (
        searchValue &&
        <div className="tracklist-container animate__animated animate__fadeInUp">
            {results.length > 0 ?
            <>
                <h2>Results for '{searchValue}'</h2>
                <Tracklist results={ results } />
            </> :
            <h2>Hmm, no results found. Try again.</h2>
            }
        </div>
    )
}