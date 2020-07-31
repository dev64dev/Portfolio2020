import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import './FullPost.scss';

const FullPost = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedPost, setLoadedPost] = useState(null);
  // const [post, setPost] = useState();

  useEffect(() => {
    fetchData();
  }, [props.id]);

  const fetchData = async () => {
    if (props.id) {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${props.id}`
        );
        setLoadedPost(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

const deletePostHandler = async()=>{
  if (props.id) {
    try {
      setIsLoading(true);
      const res = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${props.id}`
      );
      console.log(res);

      setLoadedPost(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
}

  let selectedPost = (
    <p style={{ textAlign: 'center' }}>Please select a post..</p>
  );
  if (props.id) {
    selectedPost = <p style={{ textAlign: 'center' }}>Loading...!</p>;
  }
  if (loadedPost) {
    selectedPost = (
      <div className="selected-post">
        <h1>{loadedPost.title}</h1>
        <p>{loadedPost.body}</p>
        <div className="edit">
          <button className="delete" onClick={deletePostHandler}>Delete</button>
        </div>
      </div>
    );
  }

  return selectedPost;
};
export default FullPost;
