import React, { Component, Fragment} from 'react';
import productContent from '../data/productContent.json';
import products from '../data/products.json';
import ProductCard from './inc/ProductCard';
const Product = () => {

  let title = '';
  let p1 = '';
  let p2 = '';
  let p3 = '';
  let p4 = '';
  let heroImg = '';
  productContent.productContent.map((item) => {
    title = item.title;
    heroImg = item.hero;
    p1 = item.p1;
    p2 = item.p2;
    p3 = item.p3;
    p4 = item.p4;
  });

  return (

      <div>
        <div className="hero__section">
          <img alt="" className="hero__img" src={heroImg}></img>
        </div>

        <div className="content__section col-8 offset-2">
          <div>
            <h1 className='text-center'>{title}</h1>
            <p className='text-center'>{p1}</p>
            <p className='text-center'>{p2}</p>
            <p className='text-center'>{p3}</p>
            <p className='text-center'>{p4}</p>
          </div>

          <div className="card-group">
            {products.products.map((item) =>
              <ProductCard name={item.name} price={item.price} img={item.img} prevprice={item.prevprice}/>
            )}
          </div>

        </div>
      </div>

    )
}

export default Product;
