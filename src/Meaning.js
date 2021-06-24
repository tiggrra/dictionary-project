import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    console.log(props.meaning);
    return <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        {props.meaning.definitions.map(function (definition, index) {
            return (
                <div key={index}>
                    <p>
                        {definition.definition}
                        <br />
                        <small><em>{definition.example}</em></small>
                        <br />
                    </p>
                    <small><Synonyms synonyms={definition.synonyms}/></small>
                </div>
            )
        })}
    </div>
}