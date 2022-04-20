import React, {useEffect, useState} from 'react';
import './App.css';
import Title from "./Components/Title";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from './Pages/Homepage';
import GalleryPage from "./Pages/GalleryPage";
import Impressum from "./Pages/Impressum";
import Navbar from "./Components/Navbar";
import CharacterDetail from "./Pages/CharacterDetail";


export default function App() {
   return(
    <BrowserRouter>
            <Title />
             <Navbar />
        <Routes>
            <Route path={"/"} element={<Homepage />}/>
            <Route path={"/gallery"} element={<GalleryPage />}/>
            <Route path={"/impressum"} element={<Impressum />}/>
            <Route path={"/character/:id"} element={<CharacterDetail />}/>
        </Routes>
    </BrowserRouter>
   )
}



