import React from 'react'


export default function Track({ trackInd, name, artist, album }) {

    return (
        <div className="track-detail">
            <div className="track-number">
                <span>{trackInd + 1}</span>
            </div>
            <div className="track-summary">
                <h3>{name}</h3>
                <p>{artist} | {album}</p>
            </div>
        </div>
    )
}