import React from 'react';
import './App.css';
import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { NewLogin } from './components/newLogin/newLogin';

function App() {
  return (
    <BrowserRouter>
    <AppRoutes></AppRoutes>
    </BrowserRouter>
  );
}

export default App;
