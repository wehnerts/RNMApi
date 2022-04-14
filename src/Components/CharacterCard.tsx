import {Character} from "../Model/Character";
import './CharacterCard.css'

type characterCardProps ={
    character: Character

}



export default function CharacterCard({character} :characterCardProps){
    return<div className={"CCard"}>
        <div className={"CCHead"}>
        <div>{character.name}</div>
        <div>{character.id}</div>
        </div>
        <div className={"CCImage"}><img src={character.image}/></div>
        <div className={"CCOrigin"}>{character.origin.name}</div>
    </div>

}

//Bekommt Array mit Character
//Erstellt pro Character aus Array eine CharacterCard