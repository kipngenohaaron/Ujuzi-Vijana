import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import About from './components/About';
import Programs from './components/Programs';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <About />
      <Programs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
