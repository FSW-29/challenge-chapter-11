import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/home/Home';

function App() {
  // const baseUrl = 'localhost:8000/' || process.env.BASE_URL;
  // `${baseUrl}api/v1/login`
  // `${baseUrl}api/v1/register`
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
