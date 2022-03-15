import React from 'react';
import CardLists from '../src/components/cardsLists/CardsLists';
// import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <BrowserRouter> */}
      <CardLists />
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
