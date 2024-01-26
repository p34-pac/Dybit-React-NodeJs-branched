import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { SignUp } from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import Dashboard from "./Pages/Dashboard/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
