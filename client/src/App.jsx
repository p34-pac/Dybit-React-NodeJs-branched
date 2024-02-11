import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { SignUp } from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import Dashboard from "./Pages/Dashboard/Dashboard"
import Profile from './Pages/Profile/Profile';
import Tasks from './Pages/Tasks/Tasks';
import Home from './Pages/LandingPage/Home';
import axios from "axios";
import {Toaster} from "react-hot-toast"
import { UserContextProvider } from '../context/userContext';
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true

function App() {
  return (
  <UserContextProvider>
    <Toaster position="top-right" toastOptions={{ duration: 2000 }}/> 
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
      </BrowserRouter>
  </UserContextProvider>
  );
}

export default App;
