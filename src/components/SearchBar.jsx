import React from 'react'
import { MdSearch } from "react-icons/md";
import classNames from 'classnames'
import { Tooltip } from 'react-tooltip'


export default function SearchBar({ searchValue, handleSearchValue }) {

    const [inputValue, setInputValue] = React.useState('')

    const searchQuery = formData => {
        const query = formData.get('trackQuery')
        handleSearchValue(query)
    }

    const classes = classNames('search-bar', { 'search-bar-start': !searchValue })

    return (
        <section className={classes}>
            <form action={searchQuery}>
                <input
                    id="trackQuery"
                    type="text"
                    name="trackQuery"
                    placeholder="Search a song, artist, or album"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
                <button className="search-button" type="submit"><MdSearch /></button>
                <Tooltip anchorSelect=".search-button" place="bottom" className="tooltip">
                    Search
                </Tooltip>
            </form>
        </section>
    )
}