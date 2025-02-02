import { useNavigate } from "react-router-dom";

function CategoryRow({ id, title, details, onEdit, onDelete }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{details}</td>
      <td>
        <button
          onClick={() => {
            onEdit(id);
          }}
          className="btn btn-success btn-sm"
        >
          Edit
        </button>
        <button
          onClick={() => {
            onDelete(id);
          }}
          className="btn btn-danger btn-sm ms-2"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default CategoryRow;
