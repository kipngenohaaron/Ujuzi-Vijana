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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/programs" component={Programs} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
