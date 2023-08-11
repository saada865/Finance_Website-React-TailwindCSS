import React from "react";
import Qnavbar from "./components/Qnavbar";
import Hero from "./components/Hero";
import Oanalytics from "./components/Oanalytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Qnavbar />
      <Hero />
      <Oanalytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
