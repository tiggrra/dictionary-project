import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(showDefinition);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function showDefinition(response) {
        setResults(response.data[0]);
    }

    function handleKeywordChange(event) {
        event.preventDefault();
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search(); 
    }
    
    if (loaded) {
        return <div className="Dictionary">
            <section>
                <p>Enter a word to search:</p>
                <form onSubmit={handleSubmit}>
                    <input type="search" placeholder="Enter a word to search" autoFocus="on" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
                </form>
            </section>
            <Results results={results} />
        </div>
    } else {
        load();
    }
}