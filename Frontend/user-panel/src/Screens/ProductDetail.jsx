import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../Service/ProductService"; // Correct import

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

      try {
        const result = await fetchProductDetails(id); // Fetch product details
        console.log("Fetch result:", result);

        if (!result) {
          setError("Failed to fetch product details.");
        } else {
          setProduct(result);
        }
      } catch (err) {
        setError("Error fetching product details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProductDetails();
  }, [id]); 

  if (loading) return <div>Loading product details...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-5">
      {product ? (
        <div>
          <p><strong>Title:</strong> {product.title}</p>
          <p><strong>Specifications:</strong> {product.description}</p>
          <p><strong>Price:</strong> {product.price}</p>
       
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default ProductDetail;