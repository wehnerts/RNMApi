import {Character} from "../Model/Character";

type characterCardProps ={
    character: Character

}



export default function CharacterCard({character} :characterCardProps){
    return<div>
        <div>{character.name}</div>
        <div>{character.id}</div>
        <div><img src={character.image}/></div>
        <div>{character.origin.name}</div>
    </div>

}

//Bekommt Array mit Character
//Erstellt pro Character aus Array eine CharacterCard