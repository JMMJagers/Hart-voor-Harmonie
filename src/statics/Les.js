import React, { Component, Fragment} from 'react';
import content from '../data/content.json';

const Les = () => {

  return (

      <div>

        <div className="hero__section">
          <img alt="" className="hero__img" src={content.lessen[0].hero}></img>
        </div>

        <div className="content__section col-12 col-md-8 offset-md-2 text-center">
          <h1>{content.lessen[0].title}</h1>
          <Fragment>
            { content.lessen[0].paragraphs1.map((item) =>
                <p>{item.p}</p>
            )}
          </Fragment>

          <h2>{content.lessen[0].title2}</h2>
          <Fragment>
            { content.lessen[0].paragraphs2.map((item) =>
                <p>{item.p}</p>
            )}
          </Fragment>

        </div>

        <div className="picture">
          <img alt="" src={content.lessen[0].img}></img>
        </div>

        <div className="content__section col-12 col-md-8 offset-md-2 text-center">
          <h2>{content.lessen[0].title3}</h2>
          <Fragment>
            { content.lessen[0].paragraphs3.map((item) =>
                <p>{item.p}</p>
            )}
          </Fragment>

        </div>
      </div>

    )
}

export default Les;
