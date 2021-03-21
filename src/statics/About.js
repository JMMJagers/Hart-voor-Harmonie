import React, {Fragment} from 'react';
import content from '../data/content.json';
import parse from 'html-react-parser';

const About = () => {

  return (

      <div>

        <div className="hero__section">
          <img alt="" className="hero__img" src={content.about[0].hero}></img>
        </div>

        <div className="content__section">
          <div className="col-12 col-md-8 offset-md-2 text-center">
            <h1>{content.about[0].title}</h1>

            {parse(content.about[0].content)}

          </div>
        </div>

        <div className="picture text-center mb-3">
          <img alt="" src={content.about[0].img}></img>
        </div>

        <div className="content__section">
          <div className="col-12 col-md-8 offset-md-2 text-center">

          {parse(content.about[0].content2)}

          </div>
        </div>

        <div className="picture text-center">
          <img alt="" src={content.about[0].img2}></img>
        </div>

      </div>

    )
}

export default About;
