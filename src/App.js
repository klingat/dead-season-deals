import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Deals from "./components/Deals";
import Footer from "./components/Footer";
import Announcement from "./components/Announcement";

function App() {
  return (
    <div className="App">
      <Announcement />
      <div className="AppBody">
        <Header />
        <Deals />
        <Footer />
      </div>
    </div>
  );
}

export default App;
