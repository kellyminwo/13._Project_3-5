import React from 'react'
import { MdSearch } from "react-icons/md";

export default function SearchBar({ handleSearchValue }) {

    const [inputValue, setInputValue] = React.useState('')

    const searchQuery = formData => {
        const query = formData.get('trackQuery')
        handleSearchValue(query)
    }

    return (
        <section className="search-bar">
            <form action={searchQuery}>
                <input 
                    id="trackQuery" 
                    type="text" 
                    name="trackQuery" 
                    placeholder="What would you like to add?" 
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)} 
                />
                <button type="submit"><MdSearch /></button>
            </form>
        </section>
    )
}