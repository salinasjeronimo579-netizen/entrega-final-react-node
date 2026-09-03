import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import Catalog from './pages/catalog/Catalog.jsx'
import Contact from './pages/contact/Contact.jsx'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
