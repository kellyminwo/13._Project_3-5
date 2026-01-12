import React from 'react'
import Track from './Track'
import { MdOutlineRemoveCircleOutline, MdEdit } from "react-icons/md";
import { PlaylistContext } from '../App'

export default function Playlist() {
    const [title, setTitle] = React.useState('New Playlist')
    const { playlist, setPlaylist } = React.useContext(PlaylistContext)
    const removeFromPlaylist = trackObj => setPlaylist(prevPlaylist => prevPlaylist.filter(track => track !== trackObj))

    console.log(playlist)

    return (
        playlist.length > 0 &&
        <form className="playlist-container animate__animated animate__fadeInUp">
            <h2>{title} <span style={{fontSize: '0.7em'}}><MdEdit /></span></h2>
            {playlist.map((trackDetail, index) => (
                <div className="tracklist animate__animated animate__fadeIn">
                    <Track
                        key={trackDetail.id}
                        trackInd={index}
                        name={trackDetail.name}
                        artist={trackDetail.artist}
                        album={trackDetail.album}
                    />

                    <div className="track-remove">
                        <button type="button" onClick={() => removeFromPlaylist(trackDetail)}><MdOutlineRemoveCircleOutline /></button>
                    </div>
                </div>
            )
            )}
            <button type="submit" className="save-button">Save to Spotify</button>
        </form>
    )
}