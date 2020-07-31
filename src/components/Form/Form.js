import React from 'react';
import { TextField } from '@material-ui/core';
import search from '../../assets/search.svg';

import './styles.css';

const Form = ({ value, onChange }) => {
  return (
    <div className="form">
      <img className="search-icon" src={search} />
      <TextField
        id="standard-search"
        label="Search.."
        type="search"
        name="search"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Form;
