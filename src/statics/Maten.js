import React, {Fragment} from 'react';
import content from '../data/content.json';
import parse from 'html-react-parser';

const Maten = () => {

  return (

      <div>
        <div className="hero__section">
          <img alt="" className="hero__img" src={content.maten[0].hero}></img>
        </div>

        <div className="content__section">
          <div className="text-center">
            <h1>{content.maten[0].title}</h1>

            {parse(content.maten[0].content)}

            <Fragment>
              <div className="col-12 col-md-8 offset-md-2 pb-4">
                <table border="1" cellspacing="2" cellpadding="2">

                  {parse(content.maten[0].table)}

                </table>
              </div>
            </Fragment>
          </div>
        </div>

        <div className="container mb-md-5">
          <div className="row">
            <img className="col-12 col-md-4" alt="" src={content.maten[0].img}></img>
            <ol className="col-10 offset-2 col-md-5 offset-md-1 mt-md-5 pl-5">
              {parse(content.maten[0].list)}
            </ol>
          </div>
        </div>

      </div>

    )
}

export default Maten;
