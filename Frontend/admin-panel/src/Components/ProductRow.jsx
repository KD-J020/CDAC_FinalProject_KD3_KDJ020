import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProductRow({ id, title, details, price, tags, image, cid, onDelete }) {
  const [product, setProduct] = useState({
    id,
    title,
    details,
    price,
    tags,
    image,
  });

  const [imageSrc, setImageSrc] = useState("");

  const [productImage, setProductImage] = useState(image);
  const navigate = useNavigate();
  useEffect(() => {
    if (productImage) {
      setImageSrc(`data:image/jpeg;base64,${productImage}`);
    }
  }, [productImage]);

  const handleEditClick = () => {
    navigate(`/home/edit-product/${id}`, {
      state: { id, title, details, price, tags, image, cid },
    });
  };

  return (
    <tr>
      <td>{id}</td>
      <td>
        {imageSrc ? (
          <img src={imageSrc} alt="Product" style={{ width: 70, height: 70 }} />
        ) : (
          <span>No Image</span>
        )}
      </td>
      <td>{title}</td>
      <td>{details}</td>
      <td>{price}</td>
      <td>{tags}</td>
      <td>
        <button className="btn btn-success btn-sm" onClick={handleEditClick}>
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm ms-3"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ProductRow;
