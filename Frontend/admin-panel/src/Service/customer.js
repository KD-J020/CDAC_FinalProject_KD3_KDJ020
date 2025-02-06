import axios from "axios";
import { createUrl } from "../utils";

export async function getCustomerList(status) {
 try{

    if(status == "active"){
        const url=createUrl('user/active/customers')
        const response=await axios.get(url);
        return response
    }else if(status == "inactive"){
        const url=createUrl('user/inactive/customers')
        const response=await axios.get(url);
        return response
    }else{
        
        const url=createUrl('user/customers')
        const response=await axios.get(url);
        return response
    }
   
 }
 catch(ex)
 {
    return { status: 'error', error: ex }
}      
}
export async function deleteCustomer(id) {

    try{
        const url=createUrl(`user/${id}`)
        const response=await axios.patch(url)
        return response
    }catch(ex)
    {
        return{status:'error',error:ex}
    }
    
}

export async function getExecutiveByTicketId(uid) {
    try{
        const url=createUrl(`user/${uid}`)
        const response=await axios.get(url)
        return response
    }catch(ex)
    {
        return{status:'error',error:ex}
    }
}   