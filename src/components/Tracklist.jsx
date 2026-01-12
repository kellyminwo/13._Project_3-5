import React from 'react'
import Track from './Track'
import { MdAddCircleOutline } from "react-icons/md";
import { PlaylistContext } from '../App'
import { Tooltip } from 'react-tooltip'

export default function Tracklist({ results }) {
    const { setPlaylist } = React.useContext(PlaylistContext)

    const addToPlaylist = trackObj => {
        setPlaylist(prevPlaylist => ([
            ...new Set([
                ...prevPlaylist,
                trackObj
            ])
        ]))
    }

    return (
        <>
            {results.map((trackDetail, index) => (
                <div className="tracklist animate__animated animate__fadeIn animate__slow">
                    <Track
                        key={trackDetail.id}
                        trackInd={index}
                        name={trackDetail.name}
                        artist={trackDetail.artist}
                        album={trackDetail.album}
                    />

                    <div className="track-add">
                        <button className="track-add-button" type="button" onClick={() => addToPlaylist(trackDetail)}><MdAddCircleOutline /></button>
                        <Tooltip anchorSelect=".track-add-button" place="bottom" className="track-add-button-tooltip">
                            Add to Playlist
                        </Tooltip>
                    </div>
                </div>
            )
            )}
        </>
    )
}