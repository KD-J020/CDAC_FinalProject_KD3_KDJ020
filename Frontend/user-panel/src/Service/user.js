import axios from "axios";
import { createUrl } from "../utils";
export async function getUserById(id) {
    try{
        const url = createUrl(`user/${id}`)
        const response = await axios.get(url);
        return response.data;
      }catch(ex){
        // console.error("Error fetching admin by id", error);
        // throw error;
        return {status:'error',error:ex}
        
      }
}
export const updateUserProfile = async (profile) => {
    try {
      const url = createUrl(`user/${profile.id}`)
      const response = await axios.put(url, profile);
      return response.data;
    } catch (error) {
      console.error("Error updating user profile:", error);
      throw error;
    }
  };
  export const getUserProfile = async () => {
    try {
      const url = createUrl('user')
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching user profile:", error);
      throw error;
    }
  };
