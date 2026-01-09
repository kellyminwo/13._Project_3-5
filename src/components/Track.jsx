import React from 'react'
import { MdAddCircleOutline } from "react-icons/md";


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
            <div className="track-add">
                <button type="button"><MdAddCircleOutline /></button>
            </div>
        </div>
    )
}