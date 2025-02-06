import { useNavigate } from "react-router-dom";

function FeedbackRow({ id, title, comment, rating, click }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{comment}</td>
      <td>{rating}/5</td>
    </tr>
  );
}

export default FeedbackRow;
