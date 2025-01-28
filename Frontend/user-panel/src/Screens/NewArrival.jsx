import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import ProductCard from "../Components/ProductCard"; // Import the reusable ProductCard component

const NewArrivals = () => {
  const products = [
    { id: 1, name: "Product 1", description: "Description of Product 1", image: "https://www.zzzone.co.uk/wp-content/uploads/2021/05/Creative-Product-Photography-2.jpg" },
    { id: 2, name: "Product 2", description: "Description of Product 2", image: "`https://via.placeholder.com/150`" },
    { id: 3, name: "Product 3", description: "Description of Product 3", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", description: "Description of Product 4", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Product 5", description: "Description of Product 5", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div>
      
      <div className="d-flex" style={{ height: "100vh" }}>
       
        <div className="content flex-grow-1 p-4" style={{ overflow: "auto" }}>
          <h2 className="mb-4">New Arrivals</h2>
          <div className="row g-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
