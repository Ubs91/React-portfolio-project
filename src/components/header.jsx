import { Link, useLocation } from 'react-router-dom';
import Navigation from './navigation';

function Header() {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1>Luis Andres Ubidia</h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;