import React, {useState} from 'react';
import './SearchBar.css';

function SearchBar({setLocationHandler}) {
    const [query, setQuery] = useState('');

    function handleClick() {
        setLocationHandler(query);
        console.log(query)
    }

    function keyPressCheck(e) {
        if (e.keyCode === 13) {
            setLocationHandler(query)
            console.log(query)
        }
    }

    return (
        <span className="searchbar">
        <input
            type="text"
            name="search"
            placeholder="Zoek een stad in Nederland"
            onChange={(e) => {
                setQuery(e.target.value)
            }}
            onKeyDown={keyPressCheck}
        />
        <button
            type="button"
            onClick={handleClick}
        >
        Zoek
        </button>
        </span>
    );
}

export default SearchBar;
