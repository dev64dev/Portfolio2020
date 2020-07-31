import React from 'react';
import loader from '../../../assets/loader.gif';
import './styles.scss';

const Loader = () => (
  <div className="loader">
    <img src={loader} alt="" />
  </div>
);
export default Loader;
