import React from "react";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Card from "./components/layout/Card";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <Card />
      </div>
      <Footer />
    </>
  );
}

export default App;
