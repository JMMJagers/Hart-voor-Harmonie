import React, {Fragment} from 'react';
import content from '../data/content.json';
import colors from '../data/colors.json';
import ProductCard from './inc/ProductCard';
import parse from 'html-react-parser';

const Colors = () => {

  return (

      <div>
        <div className="hero__section">
          <img alt="" className="hero__img" src={content.kleuren[0].hero}></img>
        </div>

        <div className="content__section">
          <div className="col-12 col-md-8 offset-md-2 text-center">
            <h1>{content.kleuren[0].title}</h1>

            {parse(content.kleuren[0].content)}


          </div>
        </div>

        <div className="card-group mx-1">
          {colors.colors.map((item) =>
            <ProductCard name={item.name} img={item.img} />
          )}
        </div>
      </div>

    )
}

export default Colors;
