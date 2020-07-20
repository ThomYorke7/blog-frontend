import React, { useState, useEffect } from 'react';
import PostCard from './postcard';
import Spinner from '../spinner';
import axios from 'axios';
import { Html5Entities } from 'html-entities';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const entities = new Html5Entities();

  useEffect(() => {
    axios
      .get('https://denim-mighty-script.glitch.me/api/posts/')
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        {loading ? (
          <Spinner></Spinner>
        ) : (
          <div className='col-md-10 col-lg-8 mx-auto'>
            {posts.map((post) => (
              <PostCard
                title={entities.decode(post.title)}
                timestamp={post.timestamp}
                slug={post.slug}
              ></PostCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostList;
