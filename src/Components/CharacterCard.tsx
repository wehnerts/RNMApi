import {Character} from "../Model/Character";
import './CharacterCard.css'
import {MouseEventHandler, useState} from "react";
import { useNavigate } from "react-router-dom";

type characterCardProps ={
    character: Character
}

export default function CharacterCard({character} :characterCardProps) {
    const navigate = useNavigate()




        const [count, setCount] = useState<number>(0);

        const onButtonClick:MouseEventHandler<HTMLButtonElement> = (event) => {
            event.stopPropagation()
            console.log("Klick!");
            setCount(count + 1);
            console.log(count);
        }
        const onCardClick = () =>{
            console.log("Click")
            console.log(character.name)
            navigate('/character/'+character.id)
        }
    return <div className={"CCard"} onClick={onCardClick}>
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

