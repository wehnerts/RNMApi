import React, {useEffect, useState} from "react";
import {Character} from "../Model/Character";
import Title from "../Components/Title";
import GalleryBoard from "../Components/GalleryBoard";

export default function GalleryPage() {

    const [charJson, setCharJson] = useState<Character[]>([]);

    const fetchCharacters = () => {
        return fetch('https://rickandmortyapi.com/api/character')
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Network error")
            })
            .catch(console.error)
    }

    useEffect(() => {
        fetchCharacters()
            .then(body => setCharJson(body.results))
    }, [])
    return (
        <div className="App">
            <GalleryBoard gallyBoardProp={charJson}/>
        </div>
    )
}