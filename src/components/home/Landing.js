import React from 'react';
import './Landing.scss';
import home_img from '../../assets/home_img.jpg';
const Landing = () => {
  return (
    <div className="container">
      <section>
        <img src={home_img} alt="" />
        <div className="baner">
          <span className="main">The Future is Now.</span>
        </div>
        <div className="boxes">
          <div className="box1">Box 1</div>
          <div className="box2">Box 2</div>
          <div className="box3">Box 3</div>
          <div className="box4">Box 4</div>
        </div>
        <div className="text-field">
          <input type="text" placeholder="input 1" />
          <input type="text" placeholder="input 2" />
          <input type="text" placeholder="input 3" />
        </div>
        <div className="btn-wrapper">
          <button className="btn btn-true">Click Me!</button>
          <button className="btn btn-false">Don't Click Me!</button>
        </div>
      </section>
      <section className="second">
        <div className="baner">
          <span className="main">The Future is Now.</span>
        </div>
        <div className="boxes">
          <div className="box1">Box 1</div>
          <div className="box2">Box 2</div>
          <div className="box3">Box 3</div>
          <div className="box4">Box 4</div>
        </div>
        <div className="text-field">
          <input type="text" placeholder="input 1" />
          <input type="text" placeholder="input 2" />
          <input type="text" placeholder="input 3" />
        </div>
        <div className="btn-wrapper">
          <button className="btn btn-true">Click Me!</button>
          <button className="btn btn-false">Don't Click Me!</button>
        </div>
      </section>
      <section className="third">
        <div className="">
          <img src={home_img} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Landing;
