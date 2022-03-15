import React from 'react';
import logo from './logo.svg';
import CardList from './components/cardsLists/CardsLists';
// import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import WelcomPage from './components/welcomePage/WelcomPage';

function App() {
  return (
    <div className='App'>
      <WelcomPage></WelcomPage>
    </div>
  );
}

export default App;
