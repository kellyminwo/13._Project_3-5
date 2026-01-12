import React from 'react'
import Track from './Track'
import { MdOutlineRemoveCircleOutline, MdEdit, MdCheck } from "react-icons/md";
import { PlaylistContext } from '../App'
import { Tooltip } from 'react-tooltip'

export default function Playlist() {
    const [title, setTitle] = React.useState('New Playlist')
    const [editTitleMode, setEditTitleMode] = React.useState(false)
    const { playlist, setPlaylist } = React.useContext(PlaylistContext)
    const removeFromPlaylist = trackObj => setPlaylist(prevPlaylist => prevPlaylist.filter(track => track !== trackObj))

    const handleClickOnEdit = () => setEditTitleMode(prev => !prev);

    const titleMode = editTitleMode ?
        <>
            <input 
                className="playlist-title" 
                type="text" value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                onKeyDown={e => e.key === 'Enter' && handleClickOnEdit()} 
            />
            <button
                type="button"
                className="playlist-title-update-button"
                onClick={handleClickOnEdit}>
                    <MdCheck />
            </button>
            <Tooltip 
                anchorSelect=".playlist-title-update-button" 
                place="bottom" 
                className="tooltip">
                    Update Playlist Title
            </Tooltip>
        </> :
        <>
            <h2 className="playlist-title">{title}</h2>
            <button
                type="button"
                className="playlist-title-edit-button"
                onClick={handleClickOnEdit}>
                    <MdEdit />
            </button>
            <Tooltip 
                anchorSelect=".playlist-title-edit-button" 
                place="bottom" 
                className="tooltip">
                Edit Playlist Title
            </Tooltip>
        </>

    return (
        playlist.length > 0 &&
        <form className="playlist-container animate__animated animate__fadeInUp">
            {titleMode}
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
                        <button className="track-remove-button" type="button" onClick={() => removeFromPlaylist(trackDetail)}><MdOutlineRemoveCircleOutline /></button>
                        <Tooltip anchorSelect=".track-remove-button" place="bottom" className="tooltip">
                            Remove from Playlist
                        </Tooltip>
                    </div>
                </div>
            )
            )}
            <button type="submit" className="save-button">Save to Spotify</button>
        </form>
    )
}