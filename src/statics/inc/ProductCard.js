import React from 'react';
import {Link} from "react-router-dom";

const ProductCard = ({name, price, prevprice, img}) => {

  return (
    <div className="col-md-4 selected_vid">
      <div className="card text-center text-white bg-primary m-3 m-3">
        <img src={img} className="product_img"/>
        <div className="card-body">
          <h5 className="card-title">{ name }</h5>
          <i className="prev-price mb-0">{ prevprice }</i>
          <p>{ price }</p>
        </div>
      </div>
    </div>
    )
}

export default ProductCard;
