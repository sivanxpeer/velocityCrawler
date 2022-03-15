import React from 'react';
import logo from './logo.svg';
import CardList from './components/cardsLists/CardsLists';
// import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      {/* <BrowserRouter> */}
      {/* <CardList /> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
