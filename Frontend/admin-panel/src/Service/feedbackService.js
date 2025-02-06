import axios from "axios";
import { createUrl } from "../utils";

export async function getAllFeedbacks(){
    try {
        const url = createUrl("feedback");
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        
    }
}