import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const PostCard = ({ title, timestamp, slug }) => {
  return (
    <div className='post-preview'>
      <Link className='post-title' to={'api/posts/' + slug}>
        <ReactMarkdown>{title}</ReactMarkdown>
      </Link>
      <p className='post-meta border-bottom pb-4 muted'>
        Posted on {timestamp}
      </p>
    </div>
  );
};

export default PostCard;
