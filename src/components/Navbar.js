import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Style/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [expendNavbar, setExpendNavbar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setExpendNavbar(false);
  }, [location]);
  return (
    <div className='navbar' id={expendNavbar ? 'open' : 'close'}>
      <div className='toggleButton'>
        <button
          onClick={() => {
            setExpendNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className='links'>
        <Link to='/'>Acceuil</Link>
        <Link to='/Projects'>Projets</Link>
        <Link to='/Experiences'>Expériences</Link>
      </div>
    </div>
  );
}

export default Navbar;
