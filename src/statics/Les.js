import React, { Component, Fragment} from 'react';
import lesContent from '../data/lesContent.json';

const Les = () => {

  let title = '';
  let title2 = '';
  let title3 = '';
  let p1 = '';
  let p2 = '';
  let p3 = '';
  let p4 = '';
  let p6 = '';
  let p5 = '';
  let heroImg = '';
  let middleImg = '';
  lesContent.lesContent.map((item) => {
    title = item.title;
    title2 = item.title2;
    title3 = item.title3;
    heroImg = item.hero;
    middleImg = item.middle;
    p1 = item.p1;
    p2 = item.p2;
    p3 = item.p3;
    p4 = item.p4;
    p5 = item.p5;
    p6 = item.p6;
  });

  return (

      <div>

        <div className="hero__section">
          <img alt="" className="hero__img" src={heroImg}></img>
        </div>

        <div className="content__section col-8 offset-2 text-center">
          <h1>{title}</h1>
          <p>{p1}</p>
          <h2>{title2}</h2>
          <p>{p2}</p>
          <p>{p3}</p>
          <p>{p4}</p>
        </div>

        <div class="middle__section">
          <img alt="" class="hero__img object-top" src={middleImg}></img>
        </div>

        <div className="content__section col-8 offset-2 text-center">
          <h2>{title3}</h2>
          <p>{p5}</p>
          <p>{p6}</p>
        </div>
      </div>

    )
}

export default Les;
