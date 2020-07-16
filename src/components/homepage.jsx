import React from 'react';
import Navbar from './navbar';
import Header from './header';
import PostList from './postlist';

const Homepage = () => {
  return (
    <div className='overlay'>
      <Navbar></Navbar>
      <Header></Header>
      <PostList></PostList>
    </div>
  );
};

export default Homepage;
