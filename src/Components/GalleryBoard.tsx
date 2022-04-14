import {Character} from "../Model/Character";
import CharacterCard from "./CharacterCard";

type GalleryBoardProps = {
    characters : Character[]

}

export default function GalleryBoard({characters}: GalleryBoardProps){
    return <div>{characters.map(characters => <CharacterCard character={characters} />)}</div>

}

// export default function GalleryBoard(){
//     return <div><CharacterCard /></div>
//
// }

//-Erstellung GalleryBoard
//-Soll CharactersCards darstellen
//-Bekommt Liste mit Character
