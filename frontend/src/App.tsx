import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import SidebarMenu, {type MenuItem} from './_components/Sidebar'
import type { JSX } from 'react'
import ExpensesRoutes from './pages/Expenses/ExpenseRoutes'
import LoanRoutes from './pages/Loans/LoanRoutes'
import GroupRoutes from './pages/Groups/GroupRoutes'
import IncomeRoutes from './pages/Income/IncomeRoutes'
import InvestmentsRoutes from './pages/Investments/InvestmentRoutes'

const menuItems: MenuItem[] = [
    { title: 'Home', path: '/home' },
    { title: 'Income', path: '/income' },
    { title: 'Expenses', path: '/expenses' },
    { title: 'Loans', path: '/loan' },
    { title: 'Groups', path: '/groups' },
    { title: 'Investments', path: '/investments' },
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
            
            {/* Income Routes */}
            <Route path="/income/*" element={<IncomeRoutes />} />

            {/* Expense Routes */}
            <Route path="/expenses/*" element={<ExpensesRoutes />} />

            {/* Investations Routes */}
            <Route path="/investments/*" element={<InvestmentsRoutes/>} />

            {/* Loan Routes */}
            <Route path="/loan/*" element={<LoanRoutes />} />

            {/* Group routes */}
            <Route path='/groups/*' element={<GroupRoutes />} />
            
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
