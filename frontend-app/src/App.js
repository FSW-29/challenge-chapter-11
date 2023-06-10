import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/home/Home';
import LoginPage from './pages/Login.page';
import RegisterPage from './pages/Register.page';
import UploadFile from './components/UploadFile';
import Game from './pages/game/Game'
import GameDetail from './pages/game/GameDetail';

function App() {
  // const baseUrl = 'localhost:8000/' || process.env.BASE_URL;
  // `${baseUrl}api/v1/login`
  // `${baseUrl}api/v1/register`
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/register' element={ <RegisterPage /> } />
        <Route path='/login' element={ <LoginPage dataLogin={"Login Page"}/> } />
        <Route path='/upload' element={ <UploadFile /> } />
        <Route path='/GameList' element={ <Game /> } />
        <Route path='/GameDetail' element={ <GameDetail /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
