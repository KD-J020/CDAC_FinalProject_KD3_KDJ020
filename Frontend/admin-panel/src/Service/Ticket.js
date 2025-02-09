import { createUrl } from "../utils";
import axios from 'axios';

export async function getTicketList(status)
{
    try{
        
        if(status=='all')
        {
            const url=createUrl('ticket/all')
            const response=await axios.get(url);
            return response
        }else if(status=='new')
        {
            const url=createUrl('ticket/notassigned')
            const response=await axios.get(url);
            return response
        }else{
            const url=createUrl('ticket/assigned')
            const response=await axios.get(url);
            return response
        }
      
    }
    catch(ex)
    {
        return{
            status:'error',
            error:ex
        }
    }
}
export async function assignTicketToExecutive(executiveId,ticketId)
{
    try{
        const url=createUrl(`admin/${executiveId}/${ticketId}`);
        const response=await axios.patch(url);
        return response
    }
    catch(ex)
    {
        return{
            status:'error',
            error:ex
        }
    }
}