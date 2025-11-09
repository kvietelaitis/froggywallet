import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Group = {
    id: string;
    name: string;
    members: string[];
}

export default function GroupsPage(){
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    //TODO:
    // Impliment gathering groups from backend

    return (
        <div>
            <h1>Groups Page</h1>
            {loading && <p>Loading groups...</p>}
            {error && <p style={{color: 'red'}}>Error: {error}</p>}
            <p style={{marginBottom: '1rem'}}>This is where the groups will be displayed.</p>
            <button onClick={() => navigate('create-group')}>Create Group</button>
            
            <button style={{marginTop: '1rem'}} onClick={() => navigate('edit-group')}>Existing1 Group</button>
        </div>
    );
}