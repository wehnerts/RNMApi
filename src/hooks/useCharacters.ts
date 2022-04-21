import {useEffect, useState} from "react";
import {Character} from "../Model/Character";
import axios from "axios";

export default function useCharacters () {
    const [characters, setCharacters] = useState<Character[]>([])


    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(response => response.data)
            .then(data => setCharacters(data))
            .catch(console.error)
    }, [])

    return {characters, setCharacters}
}