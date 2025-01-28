import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    
    const fetchProductDetails = () => {
     
      const products = [
        { id: 1, name: "Product 1", description: "Full details of Product 1", specs: "Specs of Product 1" },
        { id: 2, name: "Product 2", description: "Full details of Product 2", specs: "Specs of Product 2" },
        { id: 3, name: "Product 3", description: "Full details of Product 3", specs: "Specs of Product 3" },
        { id: 4, name: "Product 4", description: "Full details of Product 4", specs: "Specs of Product 4" },
        { id: 5, name: "Product 5", description: "Full details of Product 5", specs: "Specs of Product 5" },
      ];

      const product = products.find((p) => p.id === parseInt(id));
      setProduct(product);
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h4>Specifications</h4>
      <p>{product.specs}</p>
      
    </div>
  );
};

export default ProductDetail;
