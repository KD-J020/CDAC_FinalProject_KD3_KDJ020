function TicketRow({ id, subject, description, user_id, product_id, status }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{subject}</td>
      <td>{description}</td>
      <td>{status}</td>
    </tr>
  );
}

export default TicketRow;
