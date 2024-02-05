import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div>
    <Router>
       <Header/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
