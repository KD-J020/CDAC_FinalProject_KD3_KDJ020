import { useState } from "react";

function ProductRow({ id, title, details, price, tags, image, onDelete }) {
  const [product, setProduct] = useState({
    id,
    title,
    details,
    price,
    tags,
    image,
  });
  const handleEditClick = () => {
    // setIsEditing(true);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>
        <img alt="" style={{ width: 70, height: 70 }} />
      </td>
      <td>{title.length > 50 ? title.substr(0, 50) + "..." : title}</td>
      <td>{details.length > 50 ? details.substr(0, 50) + "..." : details}</td>
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
