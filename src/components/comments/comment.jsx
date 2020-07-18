import React from 'react';
import { Html5Entities } from 'html-entities';

const Comment = ({ username, text, timestamp }) => {
  const entities = new Html5Entities();
  return (
    <div className='card my-3 border-0'>
      <div className='row no-gutters border-bottom'>
        <div className='card-body p-0'>
          <h5 className='card-title m-0'>{username}</h5>
          <p className='card-text m-0'>
            <small className='text-muted'>Posted on {timestamp}</small>
          </p>
          <p className='card-text my-2'>{entities.decode(text)}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
