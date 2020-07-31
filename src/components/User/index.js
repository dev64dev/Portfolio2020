import React from 'react';
import './styles.scss';
const User = (props) => {
  return (
    <div className="user">
      <p>{props.name}</p>
      <p>{props.email}</p>
      <p>{props.id}</p>
    </div>
  );
};

export default User;
