import { Link } from 'react-router-dom';

function Navbar(){
  return (
    <nav >
      <div className="container">
        <h1>Meedah DemoApp</h1>
        <ul >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;