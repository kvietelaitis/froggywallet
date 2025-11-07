import React, { JSX, useEffect, useState } from 'react';

interface User {
  id: number;
  vardas: string;
  email: string;
  // add other fields from your Narys model
}

export default function UsersPage(): JSX.Element {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [users, setUsers] = useState<User[]>([]);

    async function testConnection() {
        setLoading(true);
        setError(null);
        setData(null);

        try {
            // Primary endpoint
            let res = await fetch('/users', { headers: { Accept: 'application/json' } });

            // Fallback to /api/users if /users returns 404
            if (res.status === 404) {
                res = await fetch('/api/users', { headers: { Accept: 'application/json' } });
            }

            if (!res.ok) {
                const txt = await res.text().catch(() => '');
                throw new Error(`${res.status} ${res.statusText}${txt ? ` - ${txt}` : ''}`);
            }

            const json = await res.json();
            setData(json);
        } catch (e: any) {
            setError(e?.message ?? String(e));
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetch('http://localhost:8080/api/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching users:', err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div style={{ padding: 20, fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}>
            <h1>Users controller — connection test</h1>
            <p>Click the button to GET /users (falls back to /api/users).</p>
            <button onClick={testConnection} disabled={loading} style={{ padding: '8px 12px' }}>
                {loading ? 'Testing...' : 'Test connection'}
            </button>

            {error && (
                <div style={{ marginTop: 12, color: 'crimson' }}>
                    <strong>Error:</strong> {error}
                </div>
            )}

            {data && (
                <div style={{ marginTop: 12 }}>
                    <strong>Response:</strong>
                    <pre style={{ background: '#f6f8fa', padding: 12, borderRadius: 6, maxHeight: 400, overflow: 'auto' }}>
                        {JSON.stringify(data, null, 2)}
                    </pre>
                </div>
            )}

            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.vardas} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}