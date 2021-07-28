import React from "react";
import Main from './components/Main'
import Header from "./components/Header";
import Hero from "./components/Hero";

import "./App.css";

function App() {
  return (
    <div className="App container-fluid p-0">
  
        <Header/>
        <Hero/>
        <Main/>
     
    </div>
  );
}

export default App;
