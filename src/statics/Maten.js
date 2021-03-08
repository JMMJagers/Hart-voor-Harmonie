import React, {Fragment} from 'react';
import content from '../data/content.json';

const Maten = () => {

  return (

      <div>
        <div className="hero__section">
          <img alt="" className="hero__img" src={content.maten[0].hero}></img>
        </div>

        <div className="content__section">
          <div className="text-center">
            <h1>{content.maten[0].title}</h1>

            <Fragment>
              { content.maten[0].paragraphs.map((item) =>
                  <p>{item.p}</p>
              )}
            </Fragment>

            <Fragment>
              <div className="col-12 col-md-8 offset-md-2 pb-4">
                <table border="1" cellspacing="2" cellpadding="2">
                  <thead>
                    <tr>
                    { content.maten[0].table.map((item) =>
                        <th><strong>{item.th}</strong></th>
                    )}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      { content.maten[0].table.map((item) =>
                          <td>{item.td1}</td>
                      )}
                    </tr>
                    <tr>
                      { content.maten[0].table.map((item) =>
                          <td>{item.td2}</td>
                      )}
                    </tr>
                    <tr>
                      { content.maten[0].table.map((item) =>
                          <td>{item.td3}</td>
                      )}
                    </tr>
                    <tr>
                      { content.maten[0].table.map((item) =>
                          <td>{item.td4}</td>
                      )}
                    </tr>
                    <tr>
                      { content.maten[0].table.map((item) =>
                          <td>{item.td5}</td>
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
            </Fragment>
          </div>

          <div className="container mb-5">
            <img className="col-4" alt="" src={content.maten[0].img}></img>
            <ol className="col-8 float-right mt-5 pl-5">
              { content.maten[0].numbers.map((item) =>
                  <li>
                    <p>{item.p}</p>
                  </li>
              )}
            </ol>
          </div>

        </div>

      </div>

    )
}

export default Maten;
