import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/auth/Register';


function App() {
  return (
    <>
  {/* <Home /> */}

    <BrowserRouter>
      <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
