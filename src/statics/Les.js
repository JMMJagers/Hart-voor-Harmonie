import React, { Component, Fragment} from 'react';
import content from '../data/content.json';
import parse from 'html-react-parser';

const Les = () => {

  return (

      <div>

        <div className="hero__section">
          <img alt="" className="hero__img" src={content.lessen[0].hero}></img>
        </div>

        <div className="content__section col-12 col-md-8 offset-md-2 text-center">
          <h1>{content.lessen[0].title}</h1>

          {parse(content.lessen[0].content)}

          <h2>{content.lessen[0].title2}</h2>

          {parse(content.lessen[0].content2)}

        </div>

        <div className="picture text-center">
          <img alt="" src={content.lessen[0].img}></img>
        </div>

        <div className="content__section col-12 col-md-8 offset-md-2 text-center">
          <h2>{content.lessen[0].title3}</h2>

          {parse(content.lessen[0].content3)}

        </div>
      </div>

    )
}

export default Les;
