import React from 'react';
import './App.css';
import Header from './component/header/header.js';
import Footer from './component/footer/footer.js';
import List from './pages/employees/list';
import { Routes, Route } from "react-router-dom";
import Login from './pages/login/login';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
