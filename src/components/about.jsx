import React from 'react';
import Navbar from './navbar';
import Header from './header';

const About = () => {
  return (
    <div className='about-overlay'>
      <Navbar mode='light'></Navbar>
      <Header
        title='About Me'
        subtitle='This is what I do.'
        mode='light'
      ></Header>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 col-lg-8 mx-auto about-text'>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              libero culpa perspiciatis, mollitia architecto, magni assumenda
              nemo eum illum quos aperiam! Aliquam amet exercitationem quod
              reprehenderit! Modi nemo illo ex! lorem
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              veritatis nemo reiciendis omnis nobis accusantium numquam?
              Corrupti praesentium nobis, vel sequi repellat ratione delectus
              inventore incidunt. Totam fugiat vero reiciendis!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
