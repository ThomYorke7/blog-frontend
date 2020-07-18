import React from 'react';
import Navbar from './navbar';
import Header from './header';

const Contacts = () => {
  return (
    <div className='contact-overlay'>
      <Navbar mode='light'></Navbar>
      <Header
        title='Contact Me'
        subtitle='I may have answers.'
        mode='light'
      ></Header>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 col-lg-8 mx-auto about-text'>
            <h4>
              Want to get in touch? Fill out the form below to send me a message
              and I will get back to you as soon as possible!
            </h4>
            <form className='mt-5'>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  id='name'
                  name='name'
                  className='form-control'
                  required
                ></input>
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email Address</label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputNumber1'>Phone Number</label>
                <input
                  type='tel'
                  className='form-control'
                  id='exampleInputNumber1'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputMessage'>Message</label>
                <textarea className='form-control' id='exampleInputMessage' />
              </div>
              <button type='submit' class='btn btn-primary'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
