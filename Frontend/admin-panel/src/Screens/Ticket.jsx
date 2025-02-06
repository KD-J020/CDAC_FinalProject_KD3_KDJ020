import { useState ,useEffect} from "react";
import TicketRow from "../Components/TicketRow";
import { getTicketList ,assignTicketToExecutive} from "../Service/Ticket";
import {getExecutiveList} from '../Service/executive';

import {toast} from 'react-toastify';
function Ticket(){
      const[tickets,setTickets]=useState([])
      const[sortOption,setSortOption]=useState('all');
      const onLoadTickets=async()=>{
        const result=await getTicketList(sortOption);
        console.log(sortOption);
        console.log(result.data);
        setTickets(result.data);
      }
      
      const assignToExecutor=async(executiveId,ticketId)=>{
        console.log(executiveId,ticketId);
        const eid=Number(executiveId)
        const tid=Number(ticketId)
        console.log(eid,tid);
        const result=await assignTicketToExecutive(eid,tid);
        if(result.status==='error')
        {
          toast.error(result.error);
        }else{
          toast.success('Ticket assigned successfully');
          onLoadTickets();
        }
      }
      const[executives,setExecutives]=useState([]);
      const getAllExecutives=async()=>{
                const result=await getExecutiveList();
                if(result.status==='error')
                {
                  toast.error(result.error);
                }
                else{
                  setExecutives(result.data);
                }
            }
      const handleSortChange=(e)=>{
           setSortOption(e.target.value);
      }
      useEffect(()=>{
        onLoadTickets();
        getAllExecutives();
      },[sortOption])
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Customer Tickets</h2>
      <select className="form-control w-auto h-5" value={sortOption} onChange={handleSortChange}>
                    <option value="active">All Tickets</option>
                    <option value="new">New Tickets</option>
                    <option value="assigned">Assigned Ticket</option>
                </select>
       <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Ticket ID</th>
            <th>subject</th>
            <th>Description</th>
            <th>Status</th>
            <th>Executive</th>
          </tr>
        </thead>
        <tbody>
            {tickets.map((ticket) => {
              return(
              <TicketRow
                key={ticket["id"]}
                id={ticket["id"]}
                eid={ticket["executor_id"]}
                subject={ticket["subject"]}
                description={ticket["description"]}
                status={ticket["status"]}
                 executives={executives}
                onAssign={assignToExecutor}
            
                />  
              )   
           })}
        </tbody>
      </table>
    </div>
  );
}
export default Ticket
