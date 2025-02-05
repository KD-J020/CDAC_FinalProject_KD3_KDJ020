function Row({ id, firstName,lastName,email,phone, onDelete }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <button
          onClick={() => {
            onDelete(id)
          }}
          className='btn btn-danger btn-sm ms-2'
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Row
