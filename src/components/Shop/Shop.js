import React from 'react';
import { useState } from 'react';
import heart from '../../assets/heart.svg';
import heart_red from '../../assets/heart_red.svg';

import './styles.css';

const Shop = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    console.log(isLiked);
  };
  const heartIcon = !isLiked ? heart : heart_red;
  return (
    <div className="shop">
      <img className="heart" src={heartIcon} alt="" onClick={toggleLike} />
      <img className="shop-img" src={props.imageUrl} alt="" />
      <div className="shop-info">
        <p className="shop-name">{props.name}</p>
        <p className="shop-floor">{props.floorName}</p>
      </div>
    </div>
  );
};

export default Shop;
