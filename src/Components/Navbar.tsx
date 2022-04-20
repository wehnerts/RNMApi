import './Navbar.css'
import {Link, NavLink} from "react-router-dom";
export default function Navbar(){
    return (<div className={"Nav"}>
        <NavLink to={"/"}> Home </NavLink>
        <NavLink to={"/gallery"}> Gallery </NavLink>
        <NavLink to={"/impressum"}> Impressum </NavLink>
    </div>)
}