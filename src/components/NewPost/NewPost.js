import React, { useState } from 'react';
import axios from 'axios';
import './NewPost.scss';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('Yaniv');

  const postDataHandler = async () => {
    const data = {
      title: title,
      content: content,
      author: author,
    };
    const res = await axios.post(
      `https://jsonplaceholder.typicode.com/posts/`,
      data
    );

    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <div className="new-post">
      <h1>Add a Post</h1>
      <label>Title</label>
      <input
        type="text"
        value={title}
        name="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Content</label>
      <input
        type="text"
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <label>Author</label>
      <select value={author} onChange={(e) => setAuthor(e.target.value)}>
        <option value="Yaniv">Yaniv</option>
        <option value="Manu">Manu</option>
      </select>

      <button onClick={postDataHandler}>Add Post</button>
    </div>
  );
};

export default NewPost;
