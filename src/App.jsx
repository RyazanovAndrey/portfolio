import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import ScrollTop from "./components/ScrollTop.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
        <div className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10 pt-10 opacity-50">
                <div className="circle-box"></div>
            </div>
            <Skills />
            <Works />
        </div>
      <div className="relative overflow-hidden">
        <div className="absolute top-0 right-0 z-10 pt-10 pacity-50">
                <div className="circle-box"></div>
        </div>
        <Contacts />
        <Footer />
      </div>
        <ScrollTop />
    </>
  );
}

export default App;
