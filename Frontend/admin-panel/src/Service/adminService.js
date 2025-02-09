import axios from "axios";
import { createUrl } from "../utils";

export const getUserProfile = async () => {
  try {
    const url = createUrl('Admin')
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

export const updateUserProfile = async (profile) => {
  try {
    const url = createUrl('Admin/')
    const response = await axios.patch(`Admin/${profile.id}`, profile);
    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};

export const getAdminById = async (id) =>{
  try{
    const url = createUrl(`Admin/${id}`)
    const response = await axios.get(url);
    return response.data;
  }catch{
    // console.error("Error fetching admin by id", error);
    // throw error;
  }
}