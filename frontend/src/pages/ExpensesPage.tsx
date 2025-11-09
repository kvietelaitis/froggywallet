import React from 'react'
import { Link } from 'react-router-dom'

export default function ExpensesPage() {
  return (
    <div className="auth-container">
      <div style={{ maxWidth: 420, margin: '40px auto', textAlign: 'center' }}>
        <h1>Išlaidų peržiūra</h1>
        <p>Šiuo metu čia rodoma išlaidų peržiūra.</p>
        <Link to="/home" style={{ textDecoration: 'underline', color: 'red' }}>
          <p>Grįžti į pagrindinį puslapį</p>
        </Link>
        <Link to="/addexpenses" style={{ textDecoration: 'underline', color: 'red' }}>
          <p>Pridėti išlaidas</p>
        </Link>
        <Link to="/addperiodicalexpenses" style={{ textDecoration: 'underline', color: 'red' }}>
          <p>Pridėti pasikartojančias išlaidas</p>
        </Link>
        <Link to="/compareexpenses" style={{ textDecoration: 'underline', color: 'red' }}>
          <p>Palyginti išlaidas</p>
        </Link>
        <Link to="/deleteexpenses" style={{ textDecoration: 'underline', color: 'red' }}>
          <p>Pašalinti išlaidas</p>
        </Link>
        <Link to="/editexpenses" style={{ textDecoration: 'underline', color: 'red' }}>
          <p>Redaguoti išlaidas</p>
        </Link>
        <Link to="/groupexpenses" style={{ textDecoration: 'underline', color: 'red' }}>
          <p>Grupuoti išlaidas</p>
        </Link>
      </div>
    </div>
  )
}