import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Banner from './components/Banner'
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <Banner />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;