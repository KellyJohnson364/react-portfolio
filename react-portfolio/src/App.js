import React from "react";
import Main from './components/Main'
import Header from "./components/Header";
import Hero from "./components/Hero";

import "./App.css";

function App() {
  return (
    <div className="App Container col-12">
      <div className="row">
        <Header/>
        <Hero/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
