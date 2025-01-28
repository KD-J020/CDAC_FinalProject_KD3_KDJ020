import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, name, description, image }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <Link to={`/Home/product/${id}`}>
          <img src={image} className="card-img-top" alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
