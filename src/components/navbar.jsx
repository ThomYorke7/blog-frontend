import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ mode }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light border-0'>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav ml-auto'>
          <Link
            className='nav-item nav-link'
            to='/'
            style={mode === 'light' ? { color: 'white' } : { color: '#212529' }}
          >
            Home <span className='sr-only'>(current)</span>
          </Link>
          <Link
            className='nav-item nav-link'
            to='/about'
            style={mode === 'light' ? { color: 'white' } : { color: '#212529' }}
          >
            About
          </Link>
          <Link
            className='nav-item nav-link'
            to='/contact'
            style={mode === 'light' ? { color: 'white' } : { color: '#212529' }}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
