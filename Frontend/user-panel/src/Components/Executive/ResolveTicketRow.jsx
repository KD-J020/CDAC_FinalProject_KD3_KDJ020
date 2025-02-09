import { Navigate, useNavigate } from "react-router-dom";

function ResolveTicketRow({
  id,
  subject,
  description,
  user_id,
  product_id,
  status,
}) {
  const navigate = useNavigate();
  const handleEditClick = () => {
    navigate(`/executive-home/ticket-answer/${id}`, {
      //   state: { id, title, details, price, tags, image, cid },
    });
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{subject}</td>
      <td>{description}</td>
      <td>{status}</td>
      <td>
        <button className="btn btn-success btn-sm" onClick={handleEditClick}>
          Resolve
        </button>
      </td>
    </tr>
  );
}

export default ResolveTicketRow;
