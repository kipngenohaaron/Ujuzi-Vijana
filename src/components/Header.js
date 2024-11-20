// import React from 'react';

// const Header = () => {
//   return (
//     <header className="header">
//       <h1>Ujuzi Vijana</h1>
//       <nav>
//         <ul className="nav-links">
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#programs">Programs</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Ujuzi Vijana</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/programs">Programs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
