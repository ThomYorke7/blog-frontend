import React from 'react';

const Header = ({ title, subtitle, mode }) => {
  return (
    <header className='header mb-5'>
      <div className='container-fluid h-100'>
        <div className='row h-100 align-items-center'>
          <div className='col-lg-6  text-center'>
            <h1
              className='header-title'
              style={mode === 'light' ? { color: 'white' } : {}}
            >
              {title}
            </h1>
            <h3
              className='header-subtitle'
              style={mode === 'light' ? { color: 'white' } : {}}
            >
              {subtitle}
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
