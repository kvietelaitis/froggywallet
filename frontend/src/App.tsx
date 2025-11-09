import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import AddExpensesPage from './pages/AddExpensesPage'
import AddPeriodicalExpensesPage from './pages/AddPeriodicalExpensesPage'
import CompareExpensesPage from './pages/CompareExpensesPage'
import EditExpensesPage from './pages/EditExpensesPage'
import ExpensesPage from './pages/ExpensesPage'
import GroupExpensesPage from './pages/GroupExpensesPage'
import DeleteExpensesPage from './pages/DeleteExpensesPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/addexpenses" element={<AddExpensesPage />} />
        <Route path="/addperiodicalexpenses" element={<AddPeriodicalExpensesPage />} />
        <Route path="/compareexpenses" element={<CompareExpensesPage />} />
        <Route path="/editexpenses" element={<EditExpensesPage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/groupexpenses" element={<GroupExpensesPage />} />
        <Route path="/deleteexpenses" element={<DeleteExpensesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
