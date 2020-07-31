import React, { useState, useEffect } from 'react';
import NewPost from '../../components/NewPost/NewPost';
import FullPost from '../../components/FullPost/FullPost';
import Post from '../../components/Post/Post';
import axios from 'axios';

import './Blog.scss';

const Blog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedPost, setLoadedPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      let res = await axios.get('https://jsonplaceholder.typicode.com/posts/');

      setLoadedPost(res.data.slice(0, 4));

      res = res.data.slice(0, 4);
      const updatedPosts = res.map((post) => {
        return {
          ...post,
          author: 'Yaniv Zoie',
        };
      });
      setPosts(updatedPosts);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const postSelectedHandler = (id) => {
    setSelectedPostId(id);
  };

  const postsList = posts.map((item) => (
    <Post
      title={item.title}
      author={item.author}
      key={item.id}
      clicked={() => postSelectedHandler(item.id)}
    />
  ));
  return (
    <div className="posts">
      {postsList}
      <FullPost id={selectedPostId} />
      <NewPost />
    </div>
  );
};

export default Blog;
