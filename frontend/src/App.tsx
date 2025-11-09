import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import SidebarMenu, {type MenuItem} from './_components/Sidebar'

import AddExpensesPage from './pages/Expenses/AddExpensesPage'
import AddPeriodicalExpensesPage from './pages/Expenses/AddPeriodicalExpensesPage'
import CompareExpensesPage from './pages/Expenses/CompareExpensesPage'
import EditExpensesPage from './pages/Expenses/EditExpensesPage'
import ExpensesPage from './pages/Expenses/ExpensesPage'
import GroupExpensesPage from './pages/Expenses/GroupExpensesPage'
import DeleteExpensesPage from './pages/Expenses/DeleteExpensesPage'

import LoanPage from './pages/Loans/LoanPage'
import DebtorPage from './pages/Loans/DebtorPage'
import DeleteLoansPage from './pages/Loans/DeleteLoansPage'
import MontlyPayment from './pages/Loans/MonthlyPayment'
import PayLoan from './pages/Loans/PayLoan'
import type { JSX } from 'react'

const menuItems: MenuItem[] = [
    { title: 'Home', path: '/home' },
    { title: 'Expenses', path: '/expenses' },
    { title: 'Loans', path: '/loan' },
    { title: 'Settings', path: '/settings' },
];

function AppContent(): JSX.Element {
  const location = useLocation();
  const hideSidebar = ['/', '/register', '/auth'].includes(location.pathname);

  return (
    <div className="app-layout">
        {!hideSidebar && <SidebarMenu menuItems={menuItems} />}
        <main className={`app-main-content${hideSidebar ? ' no-sidebar' : ''}`}>
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
            
            <Route path="/loan" element={<LoanPage />} />
            <Route path="/deleteloan" element={<DeleteLoansPage />} />
            <Route path="/debtor" element={<DebtorPage />} />
            <Route path="/monthlyloan" element={<MontlyPayment />} />
            <Route path="/payloan" element={<PayLoan />} />
          </Routes>
        </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
