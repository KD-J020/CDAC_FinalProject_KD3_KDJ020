import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // If you're using Bootstrap
import { Link } from "react-router-dom"; // If you're using React Router
import { fetchAllProducts } from "../Service/ProductService"; // Your product service
import { toast } from "react-toastify"; // For notifications (if used)
import '../Styles/Home.css'; // Import your CSS file

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const onLoadProduct = async () => {
    setLoading(true);
    try {
      const result = await fetchAllProducts();
      if (result.status === "error") {
        toast.error(result.error);
      } else {
        setProducts(result.data);
      }
    } catch (error) {
      toast.error("An error occurred while fetching products.");
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    onLoadProduct();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (products.length === 0) {
    return <div className="text-center">No products found.</div>;
  }

  return (
    <div className="new-arrivals-container"> {/* Main container with class */}
      <h2 className="new-arrivals-heading">New Arrivals</h2> {/* Heading with class */}
      <div className="row g-4"> {/* Bootstrap grid row */}
        {products.map((product) => (
          <div className="col-md-4" key={product.id}> {/* Bootstrap column for responsiveness */}
            <div className="product-card"> {/* Card with class */}
              <div className="image-container">
                <img
                  src={product.image ? `data:image/jpeg;base64,${product.image}` : "https://via.placeholder.com/200"} // Placeholder
                  className="card-img-top"
                  alt={product.name || "Product"}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name || "Product Name"}</h5>
                <p className="card-text">
                  {product.description || "Product description not available."}
                </p>
                <Link
                  to={`/home/product/${product.id}`}
                  className="view-details-button" // Button with class
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;