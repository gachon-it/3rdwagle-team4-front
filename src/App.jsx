import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignUpProfile from './pages/SignUpProfile';
import Login from './pages/Login';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup-profile" element={<SignUpProfile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
