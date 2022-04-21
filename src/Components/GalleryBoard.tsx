import {Character} from "../Model/Character";
import CharacterCard from "./CharacterCard";
import './GalleryBoard.css';
import {ChangeEvent, useState} from "react";

type GalleryBoardProps = {
    gallyBoardProps : Character[]

}

export default function GalleryBoard({gallyBoardProps}: GalleryBoardProps){

    const [filter, setFilter] = useState<string>("")
    const [finalFilter , setFinalFilter] = useState<string>("")
    const onButtonClick = () => {
        console.log("Klick!");

      setFinalFilter(filter)
    }
    const onTextChange = (event: ChangeEvent<HTMLInputElement>) =>{
        console.log(event.target.value)
        setFilter(event.target.value)
    }
    //Hier eingebaut im Map: der Filter um die Namen zu filtern
    return <div>
        <p>Filter:</p>
        <input onChange={onTextChange}/><button onClick={onButtonClick}>Click me!</button>
            <div className={"GalleryBoard"}>{gallyBoardProps.filter(character=> character.name.includes(finalFilter)).map(gallyBoardProp =>
            <div key={gallyBoardProp.id} className={"BoardItem"}><CharacterCard character={gallyBoardProp} /></div>)}</div>
    </div>

}

