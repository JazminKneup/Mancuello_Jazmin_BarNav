import React, { useContext } from 'react';
import UserContext from './UserContext';
import '../components/NavBar.css';

const Navbar = () => {
  const { name } = useContext(UserContext);

  return (
    <nav className="navbar">
      <h1>¡Hello, {name}!</h1>
    </nav>
  );
};

export default Navbar;