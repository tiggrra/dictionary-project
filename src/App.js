import React from "react";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <Dictionary defaultKeyword="hello"/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
