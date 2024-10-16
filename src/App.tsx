import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LayoutPage from './pages/LayoutPage';
import './assets/styles/customTheme.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <LayoutPage>
   <Routes>
    <Route path='/' element={<Dashboard/>}/>
   </Routes>
   </LayoutPage>
    </div>
  );
}

export default App;
