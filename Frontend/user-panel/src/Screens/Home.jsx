import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import ProductCard from "../Components/ProductCard";
import { useEffect, useState } from "react";
import { fetchAllProducts } from "../service/ProductService";
import axios from "axios";
import { createUrl } from "../utils";

function Home() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const result = await fetchAllProducts();
        if (result.status === "error") {
          throw new Error(result.error);
        }
        setProducts(result);

        const response = await axios.get(createUrl("product"));
        setProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content flex-grow-1 p-4">
          <h1>Welcome to the Support System</h1>

          {/* Conditionally render the product list only if we're on the /home route */}
          {location.pathname === "/home" && (
            <div>
              {loading && <p aria-live="polite">Loading products...</p>}
              {error && (
                <p className="alert alert-danger" aria-live="polite">
                  {error}
                </p>
              )}

              {!loading && !error && (
                <div className="mt-4">
                  <h2>All Products</h2>
                  {products.length === 0 ? (
                    <p>No products found.</p>
                  ) : (
                    <div className="row g-4">
                      {products.map((product) => (
                        <ProductCard key={product.id} myproduct={product} />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Render the Outlet only if the path is not /home */}
          {location.pathname !== "/home" && <Outlet />}
        </div>
      </div>
    </div>
  );
}

export default Home;