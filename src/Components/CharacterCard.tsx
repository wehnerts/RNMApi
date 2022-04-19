import {Character} from "../Model/Character";
import './CharacterCard.css'
import {useState} from "react";

type characterCardProps ={
    character: Character

}



export default function CharacterCard({character} :characterCardProps) {


        const [count, setCount] = useState<number>(0);

        const onButtonClick = () => {
            console.log("Klick!");
            setCount(count + 1);
            console.log(count);
        }

   // if (character.name.includes("Morty"))
    return <div className={"CCard"}>
            <div className={"CCHead"}>
            <div># {character.id} </div>
            <div> {character.name}</div>

            </div>
            <div className={"CCImage"}><img src={character.image}/></div>
            <div className={"CCOrigin"}>{character.origin.name}</div>
            <p>Du hast jetzt {count} mal geklickt!</p>
            <button onClick={onButtonClick}>Click me!</button>
        </div>

    }

//Bekommt Array mit Character
//Erstellt pro Character aus Array eine CharacterCard