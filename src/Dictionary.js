import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState(null);
    let [results, setResults] = useState(null);

    function search(event) {
        event.preventDefault();
        
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(showDefinition);
    }

    function showDefinition(response) {
        setResults(response.data[0]);
    }

    function handleKeywordChange(event) {
        event.preventDefault();
        setKeyword(event.target.value);
    }

    return <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" placeholder="Enter a word to search" autoFocus="on" onChange={handleKeywordChange}/>
        </form>
        <Results results={results}/>
    </div>
}