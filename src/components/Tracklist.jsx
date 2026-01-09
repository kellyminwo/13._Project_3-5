import React from 'react'
import Track from './Track'

export default function Tracklist({ results }) {
    return (
        <>
            {results.map((trackDetail, index) => 
            <Track 
                key={trackDetail.id}
                trackInd={index}
                name={trackDetail.name}
                artist={trackDetail.artist}
                album={trackDetail.album}
            />)}
        </>
    )
}