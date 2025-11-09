import React from 'react'
import { Link } from 'react-router-dom'

export default function DeleteExpensesPage() {
  return (
    <div className="auth-container">
      <div style={{ maxWidth: 420, margin: '40px auto', textAlign: 'center' }}>
        <h1>Pašalinti išlaidas</h1>
        <p>Šiuo metu čia rodomas išlaidų pašalinimas.</p>
        <Link to="/expenses" style={{ textDecoration: 'underline', color: 'blue' }}>
          Grįžti į išlaidų puslapį
        </Link>
      </div>
    </div>
  )
}