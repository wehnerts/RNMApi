import {useParams} from "react-router-dom";
import "./CharacterDetail.css"
import useCharacter from "../hooks/useCharacter";
export default function CharacterDetail() {
    const params = useParams()
    const id = params.id
    const {character, setCharacter} = useCharacter(id)

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