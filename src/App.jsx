import './App.css'
import { Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import SignUpProfile from './pages/SignUpProfile';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ProfileSet from './pages/ProfileSet';
import ResetPassword from './pages/ResetPassword';
import Home from './pages/Home';
import Mission from './pages/Mission';
function App() {

  return (
    <div>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup-profile" element={<SignUpProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profileset" element={<ProfileSet />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
      </Routes>
    </div>
  )
}

export default App
