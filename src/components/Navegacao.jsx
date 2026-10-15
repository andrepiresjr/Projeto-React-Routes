import React from "react";
import BotaoNavegacao from './BotaoNavegacao';
import { Route } from "react-router-dom";

export default function Navegacao(){
    return(
        <div style={{ display: 'flex', gap: '10px',
            justifyContent: 'center', marginTop: '20px',
         }}>
            <BotaoNavegacao rota="/" texto="Ir para a pagina 1"/>
            <BotaoNavegacao rota="/pagina-dois" texto=""/>
            
            <Navegacao/>

            <Routes/>
              <Route path="/" element={} />
              <Route path="pagina-dois" element={}/>
            <Routes/>
         </div>
    );
}