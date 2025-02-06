import axios from "axios";
import { createUrl } from "../utils";

export async function getExecutiveList(status) {
    try {

        if (status == "active") {
            const url = createUrl('user/active/executive')
            const response = await axios.get(url);
            return response
        } else if (status == "inactive") {
            const url = createUrl('user/inactive/executive')
            const response = await axios.get(url);
            return response
        } else {

            const url = createUrl('user/executive')
            const response = await axios.get(url);
            return response
        }

    }
    catch (ex) {
        return { status: 'error', error: ex }
    }
}
export async function deleteExecutive(id) {

    try{
        const url=createUrl(`user/${id}`)
        const response=await axios.patch(url)
        return response
    }catch(ex)
    {
        return{status:'error',error:ex}
    }
}
export async function addExecutive(email, firstName, lastName, password, phone) {
    try {
        const url = createUrl('user/executive')
        const response = await axios.post(url, {
            firstName,
            lastName,
            email,  
            password,
            phone
        })
        return response
    } catch (ex) {
        return { status: 'error', error: ex }
    }
}