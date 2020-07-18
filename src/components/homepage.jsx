import React from 'react';
import Navbar from './navbar';
import Header from './header';
import PostList from './posts/postlist';

const Homepage = () => {
  return (
    <div className='overlay'>
      <Navbar></Navbar>
      <Header title='A Simple Blog' subtitle='Really nothing more.'></Header>
      <PostList></PostList>
    </div>
  );
};

export default Homepage;
