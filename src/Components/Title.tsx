import logo1 from '../images/logo.png'
import logo2 from '../images/Unicorn.png'
import './Title.css'
import {useState} from "react";
let tColor = "";
export default function Title() {
    const [icon, setIcon] = useState<string>("../images/Unicorn.png");

    const onMouseEnter = () => {


        console.log("huhu");
    }
    return <div className={"Title"}>
        <img src={logo1}/>
        <h1 className={"title"} color={tColor}>Rick 'n' Morty vs. Unicorn</h1>
        <img onMouseEnter={()=>setImg()} onMouseLeave={() => resetImg()} src={logo2}/> </div>
}

    function setImg(){
        tColor="#da00fd"
        return tColor
    }
    function resetImg(){
        tColor="#01ff05"
        return tColor
    }