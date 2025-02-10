import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductCard({ myproduct }) {
  const [productImage, setProductImage] = useState(myproduct?.image); // Optional chaining
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (productImage) {
      setImageSrc(`data:image/jpeg;base64,${productImage}`);
    }
  }, [productImage]);

  const imageUrl = imageSrc || "https://via.placeholder.com/200"; // Placeholder URL

  return (
    <div className="col-md-4"> {/* Keep your column structure */}
      <div className="card h-100 shadow"> {/* h-100 for equal card heights */}
        <div className="image-container"> {/* New: Image container for better control */}
          <img
            src={imageUrl}
            className="card-img-top"
            alt={myproduct?.name || "Product"}
            style={{ objectFit: "contain" }} // Changed to "contain"
          />
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{myproduct?.name || "Product Name"}</h5>
          <p className="card-text flex-grow-1">
            {myproduct?.description || "Product description not available."}
          </p>
          <Link
            to={`/home/product/${myproduct?.id}`}
            className="btn btn-primary mt-auto"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;