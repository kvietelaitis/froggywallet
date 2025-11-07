import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function RegisterPage() {
  const [vardas, setVardas] = useState('')
  const [pavarde, setPavarde] = useState('')
  const [el_pastas, setEmail] = useState('')
  const [slaptazodis, setPassword] = useState('')
  const [vartotojo_vardas, setVartotojoVardas] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ vardas, pavarde, el_pastas, slaptazodis, vartotojo_vardas }),
    })

    const data = await res.json()
    if (res.ok) {
      // registration successful -> redirect to login or auto-login
      navigate('/')
    } else {
      setError(data.error || data.message || 'Registration failed')
    }
  }

  return (
    <div style={{ maxWidth: 420, margin: '40px auto' }}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input value={vartotojo_vardas} onChange={e=>setVartotojoVardas(e.target.value)} placeholder="Vartotojo Vardas" required />
        <input value={vardas} onChange={e=>setVardas(e.target.value)} placeholder="Vardas" required />
        <input value={pavarde} onChange={e=>setPavarde(e.target.value)} placeholder="Pavardė" required />
        <input value={el_pastas} onChange={e=>setEmail(e.target.value)} placeholder="El. paštas" type="email" required />
        <input value={slaptazodis} onChange={e=>setPassword(e.target.value)} placeholder="Slaptažodis" type="password" required />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  )
}