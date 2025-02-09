import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductCard({ myproduct }) {
  const [productImage, setProductImage] = useState(myproduct["image"]);

  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (productImage) {
      setImageSrc(`data:image/jpeg;base64,${productImage}`);
    }
  }, [productImage]);

  // Check if product is undefined or missing image property
  const imageUrl = imageSrc || "https://via.placeholder.com/150"; // Fallback image URL
  console.log(myproduct);
  return (
    <div className="col-md-4">
      <div className="card">
        <img
          src={imageUrl}
          className="card-img-top h-10"
          alt={myproduct?.name || "Product"}
        />
        <div className="card-body">
          <h5 className="card-title">{myproduct?.name || "Product Name"}</h5>
          <p className="card-text">
            {myproduct?.description || "Product description not available."}
          </p>
          <Link
            to={`/home/product/${myproduct?.id}`}
            className="btn btn-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
