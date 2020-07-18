import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './comment';

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/posts/${id}/comments`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      username,
      text,
    };
    axios
      .post(`http://localhost:5000/api/posts/${id}/comments`, comment)
      .then((res) => {
        if (res.status === 400) {
          setErrors(res);
          return;
        }
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='mt-4'>
      <h4 className='mt-3'>COMMENTS</h4>
      {errors.length > 0
        ? errors.map((error) => (
            <p className='alert alert-warning mb-0 mt-4' key={error.msg}>
              {error.msg}
            </p>
          ))
        : ''}
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='form-control'
            id='username'
            aria-describedby='username'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='comment'>Comment</label>
          <textarea
            type='comment'
            value={text}
            onChange={(e) => setText(e.target.value)}
            className='form-control'
            id='comment'
            placeholder='Leave a comment here'
            required
          />
        </div>
        <button type='submit' className='btn btn-dark mb-3'>
          Submit
        </button>
      </form>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <Comment
            username={comment.username}
            text={comment.text}
            timestamp={comment.timestamp}
            key={comment._id}
          ></Comment>
        ))
      ) : (
        <p>There are no comments here. Leave a comment!</p>
      )}
    </div>
  );
};

export default Comments;
