import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
    return <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        {props.meaning.definitions.map(function (definition, index) {
            return (
                <div className="description" key={index}>
                    <div className="definition">
                        <p className="explanation">
                            {definition.definition}
                        </p>
                        <p className="example">
                            {definition.example}
                        </p>
                        <Synonyms synonyms={definition.synonyms}/>
                    </div>
                </div>
            )
        })}
    </div>
}