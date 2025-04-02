import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  
  return (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' || location.pathname === '/' ? 'active text-white' : 'text-light'}`}
          >
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/portfolio" 
            className={`nav-link ${location.pathname === '/portfolio' ? 'active text-white' : 'text-light'}`}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active text-white' : 'text-light'}`}
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/resume" 
            className={`nav-link ${location.pathname === '/resume' ? 'active text-white' : 'text-light'}`}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;