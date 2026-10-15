import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navegacao from './components/Navegacao';
import PaginaUm from "./pages/PaginaUm";
import PaginaDois from "./pages/PaginaDois";

export default function App(){
    return(
        <BrowserRouter>
        <div>

            <Routes>
                <Route path='/' element={<PaginaUm/>}/>
                <Route path='pagina-dois' element={<PaginaDois/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    );
}