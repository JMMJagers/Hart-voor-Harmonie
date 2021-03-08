import React, {Fragment} from 'react';
import content from '../data/content.json';
import products from '../data/products.json';
import ProductCard from './inc/ProductCard';

const Product = () => {

  return (

      <div>
        <div className="hero__section">
          <img alt="" className="hero__img" src={content.producten[0].hero}></img>
        </div>

        <div className="content__section">
          <div className="col-12 col-md-8 offset-md-2 text-center">
            <h1>{content.producten[0].title}</h1>

            <Fragment>
              { content.producten[0].paragraphs.map((item) =>
                  <p>{item.p}</p>
              )}
            </Fragment>

          </div>
        </div>

        <div className="card-group mx-1">
          {products.products.map((item) =>
            <ProductCard name={item.name} price={item.price} img={item.img} prevprice={item.prevprice}/>
          )}
        </div>
      </div>

    )
}

export default Product;
