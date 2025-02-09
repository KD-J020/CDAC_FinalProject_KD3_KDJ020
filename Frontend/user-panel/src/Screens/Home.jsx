import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import ProductCard from "../Components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { createUrl } from "../utils";

function Home() {
  const location = useLocation(); // Get current route
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(createUrl("product"));
        setProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content flex-grow-1 p-4">
          {/* <h1>Welcome to the Support System</h1> */}
          {/* Conditionally render the product list only if we're on the /home route */}
          {location.pathname === "/home" && (
            <div>
              {/* Show loading or error message */}
              {loading && <p>Loading products...</p>}
              {error && <p className="alert alert-danger">{error}</p>}

              {/* Display products when loaded */}
              {!loading && !error && (
                <div className="mt-4">
                  <h2>All Products</h2>
                  <div className="row g-4">
                    {products.map((product) => (
                      <ProductCard myproduct={product} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          <Outlet /> {/* This will show child pages when navigated to them */}
        </div>
      </div>
    </div>
  );
}

export default Home;
