import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';



const App = () => {

  const [user, setUser] = useState(null)
  
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<MainPage userData={ { user } }/>} />
          <Route path='/auth' element={<LoginPage userData={ { user, setUser } }/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
