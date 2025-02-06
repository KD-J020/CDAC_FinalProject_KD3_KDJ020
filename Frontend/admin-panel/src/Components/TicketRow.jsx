import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import {getExecutiveList} from '../Service/executive';
import { getExecutiveByTicketId } from "../Service/customer";

function TicketRow({id,eid,subject,description,status,executives,onAssign})
{
  const [executive, setExecutive] = useState();
  const [EfirstName, setFirstName] = useState();

  
  const onloadExecutor = async () =>{
    console.log(eid);
    const response = await getExecutiveByTicketId(eid);
    if(response.data != null){
    setExecutive(response.data);
    setFirstName(response.data["firstName"]+" "+response.data["lastName"]);
    }

  }

  useEffect(() => {
    onloadExecutor();
  }, [eid]);
   
const [selectedExecutive,setSelectedExecutive]=useState([]);
const handleAssign=(e)=>
{
    const executiveId=e.target.value;
    setSelectedExecutive(executiveId);
    onAssign(executiveId,id);
}

    return(
       <tr>
        <td>{id}</td>
        <td>{subject}</td>
        <td>{description}</td>
        <td>
        <span className={`badge ${
                       status === 'PENDING'
                      ? 'bg-secondary'
                      : status === 'INPROGRESS'
                      ? 'bg-warning text-dark'
                      : status === 'Resolved'
                      ? 'bg-success'
                      : 'bg-secondary'
                  }`}
                  >{status}</span>
        </td>
       {status==='PENDING' ? 
        <td>
        <select
                onChange={handleAssign}
                className="form-control"
                value={selectedExecutive}
              >
               <option value="">Assign To Executive</option> {/* Default option */}
                {executives.map((executive) => {
                  return (
                    <option value={executive["id"]}>{executive["firstName"]}</option>
                  );
                })}
              
                </select>
        </td>
    : <td>{EfirstName}</td>
}
        
       </tr>
    )
}
export default TicketRow