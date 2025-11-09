import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Income = {
    id: string;
    name: string;
    members: string[];
}

export default function IncomePage(){
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    //TODO:
    // Impliment gathering income from backend

    return (
        <div>
            <h1>Income Page</h1>
            {loading && <p>Loading income...</p>}
            {error && <p style={{color: 'red'}}>Error: {error}</p>}
            <p style={{marginBottom: '1rem'}}>This is where the income will be displayed.</p>
            <button onClick={() => navigate('create-income')}>Create Income</button>
            
            <button style={{marginTop: '1rem'}} onClick={() => navigate('edit-income')}>Existing Income</button>
        </div>
    );
}