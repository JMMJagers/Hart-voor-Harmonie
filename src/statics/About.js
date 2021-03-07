import React, {Fragment} from 'react';
import content from '../data/content.json';

const About = () => {

  return (

      <div>

        <div className="hero__section">
          <img alt="" className="hero__img" src={content.about[0].hero}></img>
        </div>

        <div className="content__section">
          <div className="col-8 offset-2 text-center">
            <h1>{content.about[0].title}</h1>

            <Fragment>
              { content.about[0].paragraphs.map((item) =>
                  <p>{item.p}</p>
              )}
            </Fragment>

          </div>
        </div>

        <div className="picture">
          <img alt="" src={content.about[0].img}></img>
        </div>

        <div className="content__section">
          <div className="col-8 offset-2 text-center">

            <Fragment>
              { content.about[0].paragraphs2.map((item) =>
                  <p>{item.p}</p>
              )}
            </Fragment>

          </div>
        </div>

        <div className="picture">
          <img alt="" src={content.about[0].img2}></img>
        </div>

      </div>

    )
}

export default About;
