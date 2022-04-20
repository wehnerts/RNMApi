import logo1 from '../images/logo.png'
import logo2 from '../images/Unicorn.png'
import './Title.css'


export default function Title() {


    const onMouseEnter = () => {


        console.log("huhu");
    }
    return (
        <div className={"Title"}>
        <img src={logo1}/>
        <h1 className={"title"} >Rick 'n' Morty 'n' Unicorn</h1>
        <img  src={logo2}/> </div>

    )
}

