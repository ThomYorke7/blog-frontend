import React from 'react';

const PostCard = ({ title, timestamp }) => {
  return (
    <div className='post-preview'>
      <a href='/'>
        <h2>{title}</h2>
      </a>
      <p className='post-meta'>Posted on {timestamp}</p>
    </div>
  );
};

export default PostCard;
