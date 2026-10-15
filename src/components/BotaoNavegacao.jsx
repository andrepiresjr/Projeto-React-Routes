import React from 'react';
import { useNavigate } from 'react-router-dom';

const estiloBotao = {
    padding: '10px 20px',
    fontSize: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#007bff',
    color: '#ffffff'
}

export default function BotaoNavegacao(){
    const navigate = useNavigate();
    return(
        <button onClick={() => navigate(rota)} style={estiloBotao}>
            { texto }    
        </button>
    );
}