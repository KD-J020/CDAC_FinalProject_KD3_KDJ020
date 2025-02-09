import axios from "axios";
import {createUrl} from "../utils";
export const getTickets = async (eId) => {
    try {
        const id = Number(eId);
        const url = createUrl(`ticket/executive/${id}`);
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}

export const getTicketById = async (id ) => {
    try {
        const url = createUrl(`ticket/${id}`);
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}

export const updateTicketStatus = async (id, upTicket) => {
    try {
      const url = createUrl(`ticket/${id}`);
      const response = await axios.patch(url, upTicket, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };



