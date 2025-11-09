import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import SidebarMenu, {type MenuItem} from './_components/Sidebar'

const menuItems: MenuItem[] = [
    { title: 'Home', path: '/home' },
    { title: 'Settings', path: '/settings' },
];

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
          <SidebarMenu menuItems={menuItems} />
          <main className="app-main-content">
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/auth" element={<AuthPage />} />
            </Routes>
          </main>
      </div>
    </BrowserRouter>
  )
}

export default App
