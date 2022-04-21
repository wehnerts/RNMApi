import React, {useEffect, useState} from "react";
import {Character} from "../Model/Character";
import Title from "../Components/Title";
import GalleryBoard from "../Components/GalleryBoard";
import useCharacters from "../hooks/useCharacters";

export default function GalleryPage() {

    const {characters, setCharacters} = useCharacters();


    return (
        <div className="App">
            <GalleryBoard gallyBoardProps={characters}/>
        </div>
    )
}