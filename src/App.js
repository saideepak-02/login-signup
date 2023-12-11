import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DashBoard from './pages/DashBoard';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} ></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/Dashboard' element={<DashBoard/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
