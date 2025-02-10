import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import ProductCard from "../Components/ProductCard"; // Import the reusable ProductCard component
import { fetchAllProducts } from "../service/ProductService";
import { toast } from "react-toastify";

const NewArrivals = () => {
  const [products,setProducts]=useState([])

   const onLoadProduct=async()=>
    {
         const result= await fetchAllProducts()
         if(result.status=='error')
         {
          toast.error(result.error)
         }else{
          setProducts(result.data)
         }
    } 
  useEffect(()=>
  {
     onLoadProduct()
  },[])

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
