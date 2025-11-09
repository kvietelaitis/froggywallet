import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BudgetPage(){
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    //TODO:
    // Impliment gathering budget from backend

    return (
        <div>
            <h1>Budget Page</h1>
            {loading && <p>Loading budget...</p>}
            {error && <p style={{color: 'red'}}>Error: {error}</p>}
            <p style={{marginBottom: '1rem'}}>This is where the budget will be displayed.</p>
            <button onClick={() => navigate('create-budget')}>Create Budget</button>
            
            <button style={{marginTop: '1rem'}} onClick={() => navigate('edit-budget')}>Existing Budget</button>
        </div>
    );
}