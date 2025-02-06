import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { createUrl } from "../utils";

function ProductDetail() {
  const { id } = useParams(); // Extract the ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(createUrl(`product/${id}`)); // Fetch product details
      console.log(response.data);
      setProduct(response.data);
    } catch (err) {
      setError("Failed to fetch product details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  },[id]);
 // Runs when `id` changes

  if (loading) return <div>Loading product details...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-5">
      {product ? (
        <div>
          <h2>{product.title}</h2>  
          <p><strong>Product ID:</strong> {product.id}</p>
          <p><strong>Created On:</strong> {product.createdOn}</p>
          <p><strong>Updated On:</strong> {product.updatedOn}</p>
          <p><strong>Category ID:</strong> {product.cid || "No category assigned"}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default ProductDetail;