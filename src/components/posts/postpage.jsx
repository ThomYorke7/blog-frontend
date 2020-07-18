import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../navbar';
import Spinner from '../spinner';
import Comments from '../comments/comments';
import ReactMarkdown from 'react-markdown';

const PostPage = (props) => {
  const [post, setPost] = useState('');
  const [decodedTitle, setDecodedTitle] = useState('');
  const [decodedText, setDecodedText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/posts/' + props.match.params.slug)
      .then((res) => {
        setPost(res.data.post);
        setDecodedTitle(res.data.decodedTitle);
        setDecodedText(res.data.decodedText);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.match.params.slug]);

  return (
    <React.Fragment>
      <Navbar></Navbar>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <ReactMarkdown className=' text-center post-title'>
                {decodedTitle}
              </ReactMarkdown>
              <ReactMarkdown
                className=' post-text mt-5 border-bottom'
                source={decodedText}
              ></ReactMarkdown>
              <Comments id={post._id}></Comments>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default PostPage;
