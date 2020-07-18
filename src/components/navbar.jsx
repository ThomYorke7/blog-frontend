import React from 'react';

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
          <a
            className='nav-item nav-link'
            href='/'
            style={mode === 'light' ? { color: 'white' } : { color: '#212529' }}
          >
            Home <span className='sr-only'>(current)</span>
          </a>
          <a
            className='nav-item nav-link'
            href='/about'
            style={mode === 'light' ? { color: 'white' } : { color: '#212529' }}
          >
            About
          </a>
          <a
            className='nav-item nav-link'
            href='/contact'
            style={mode === 'light' ? { color: 'white' } : { color: '#212529' }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
