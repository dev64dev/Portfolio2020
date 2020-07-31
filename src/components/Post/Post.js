import React from 'react';
import './Post.scss';

const Post = ({ title, author, clicked }) => {
  return (
    <article className="post" onClick={clicked}>
      <h1>{title}</h1>
      <div className="info">
        <div className="author">{author}</div>
      </div>
    </article>
  );
};
export default Post;
