import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Deals from "./components/Deals";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Deals />
      <Footer />
    </div>
  );
}

export default App;
