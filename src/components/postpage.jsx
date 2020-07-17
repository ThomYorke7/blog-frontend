import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Spinner from './spinner';
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
              <div className='card-body'>
                <ReactMarkdown className='card-title text-center post-title'>
                  {decodedTitle}
                </ReactMarkdown>
                <ReactMarkdown
                  className='card-text post-text mt-5'
                  source={decodedText}
                ></ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default PostPage;
