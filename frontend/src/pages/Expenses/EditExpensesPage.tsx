import React from 'react'
import { Link } from 'react-router-dom'

export default function EditExpensesPage() {
  return (
    <div className="auth-container">
      <div style={{ maxWidth: 420, margin: '40px auto', textAlign: 'center' }}>
        <h1>Redaguoti išlaidas</h1>
        <p>Šiuo metu čia rodomas išlaidų redagavimas.</p>
        <Link to="/expenses" style={{ textDecoration: 'underline', color: 'red' }}>
          Grįžti į išlaidų puslapį
        </Link>
      </div>
    </div>
  )
}