import React from 'react';
import logo from './logo.png';
import './App.css';
import Input from './Input';
import AllTODO from './AllTODO';

function App() {
  return (
    <>
      <nav>
        <span>BUCA</span>
        <img src={logo} alt="Buca"/>
        <span>TODO</span>
      </nav>

      <main>  
        <Input />
        <AllTODO />
      </main>
    </>
  );
}

export default App;
