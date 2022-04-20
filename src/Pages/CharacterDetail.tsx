import {useParams} from "react-router-dom";
import "./CharacterDetail.css"
import {useEffect, useState} from "react";
import axios from "axios";
import {Character} from "../Model/Character";
export default function CharacterDetail() {
    const params = useParams()
    const id = params.id
    const [character, setCharacter] = useState<Character>()
    //Hole das Character JSOn und filtere nach

    useEffect(() =>{
        axios.get('https://rickandmortyapi.com/api/character/'+id)
            .then(response => response.data)
            .then(body => setCharacter(body))

    },[])
    console.log(character)
    if (character===undefined){
        return <div>Character not found!</div>
    }
    return ( <div className={"CharDetails"}>
            <img src={character.image}/><div className={"description"}>
                <h2>Name: {character.name} </h2>
                <p>Gender: {character.gender} </p>
                <p>Status: {character.status}</p>
                <p>Origin: {character.origin.name}</p>
                <p>Species: {character.species}</p>
                <p>Type: {character.type}</p>
            </div>
    </div>)

}