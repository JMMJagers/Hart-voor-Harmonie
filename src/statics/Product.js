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

        <div className="content__section col-8 offset-2 text-center">
          <div>
            <h1>{title}</h1>
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
            <p>{p4}</p>
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
