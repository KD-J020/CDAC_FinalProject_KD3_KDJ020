import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../service/ProductService";

function ProductDetail() {
  const { id } = useParams(); // Extract the ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProductDetails = async () => {
      if (!id) {
        setError("Product ID is undefined.");
        setLoading(false);
        return;
      }
      const result = await fetchProductDetails(id);
      console.log("Fetch result:", result); // Log the result
      if (result.status === "error") {
        setError("Failed to fetch product details.");
        console.error(result.error);
      } else {
        setProduct(result);
      }
      setLoading(false);
    };

    loadProductDetails();
  }, [id]); // Runs when `id` changes

  if (loading) return <div>Loading product details...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-5">
      {product ? (
        <div>
          <p><strong>Title:</strong>{product.title}</p>
        <p><strong>Specifications:</strong>{product.description}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default ProductDetail;