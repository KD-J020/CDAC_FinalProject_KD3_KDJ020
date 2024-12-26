

function TicketRow({id,customerName,status,onAction})
{

    return(
       <tr>
        <td>{id}</td>
        <td>{customerName}</td>
        <td>
        <span className={`badge ${
                       status === 'Open'
                      ? 'bg-primary'
                      : status === 'In Progress'
                      ? 'bg-warning text-dark'
                      : status === 'Resolved'
                      ? 'bg-success'
                      : 'bg-secondary'
                  }`}
                >{status}</span>

        </td>
        <td>{onAction}</td>
       </tr>
    )


}

export default TicketRow