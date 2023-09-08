import React from 'react';
import './App.css';
// import WaitingPage from './components/Waiting/WaitingPage';
import Workshops from './components/Workshops/Workshops';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      {/* <WaitingPage /> */}
      <Nav />
      <Hero />
      <About />
      <Events />
      <Workshops />
      <Contact />
      <Footer />
    </>
  );
}

export default App;