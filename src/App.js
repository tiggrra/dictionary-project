import React from "react";
import logo from './logo.jpg';
import Dictionary from "./Dictionary";
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="logo"></img>
        </header>
        <Dictionary />
        <Footer />
      </div>
    </div>
  );
}

export default App;
