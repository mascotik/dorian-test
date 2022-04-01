import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';


const App = () => {

  const [user, setUser] = useState(null)

  const setUserCallback = (value) => setUser(value);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<MainPage userData={{ user }} />} />
        <Route path='/auth' element={<LoginPage userData={{ user, setUserCallback }} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
