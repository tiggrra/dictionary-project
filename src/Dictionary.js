import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(showDefinition);

        let pexelsApiKey = "563492ad6f917000010000012ed3ab8d58a349c2bb986d961275f65b";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = {"Authorization" : `Bearer ${pexelsApiKey}`}
        axios.get(pexelsApiUrl, {headers: headers}).then(showPictures);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function showDefinition(response) {
        setResults(response.data[0]);
    }

    function showPictures(response) {
        setPhotos(response.data.photos);
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
            <Photos photos={photos} />
        </div>
    } else {
        load();
    }
}