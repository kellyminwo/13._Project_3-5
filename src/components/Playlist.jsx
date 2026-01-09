import React from 'react'

export default function Playlist() {
    return (
        <div className="playlist-container">
            <h2>New Playlist</h2>
            <p>No songs have been added yet.</p>
            <button disabled>Save to Spotify</button>
        </div>
    )
}