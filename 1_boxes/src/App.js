import React from 'react';
import logo from './logo.svg';
import './App.css';
import Boxes from './coomponents/Box/box';



function App() {
  return (
    <div className="App">
      <Boxes name='Sten' title='CEO' age='33' />
      <Boxes name='Sten' title='CEO' age='33' />
      <Boxes name='Sten' title='CEO' age='33' />
      <Boxes name='Soso' title='singer' age='33' />
      <Boxes name='Soso' title='singer' age='33' />
      <Boxes name='Soso' title='singer' age='33' />
      <Boxes name='Soso' title='singer' age='33' />
      <Boxes name='Soso' title='singer' age='33' />
      <Boxes name='Soso' title='singer' age='33' />
    </div>
  );
}

export default App;
