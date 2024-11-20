// import React from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Homepage from './components/Homepage';
// import About from './components/About';
// import Programs from './components/Programs';
// import Contact from './components/Contact';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Homepage />
//       <About />
//       <Programs />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import About from './components/About';
import Programs from './components/Programs';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

