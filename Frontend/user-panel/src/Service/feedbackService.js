import axios from "axios";
import { createUrl } from "../utils";

export async function addFeedback(userId, productId, title, comment, rating) {
  try {
    const url = createUrl(`feedback/${userId}/${productId}`);
    const feedbackData = { title, comment, rating };
    const response = await axios.post(url, feedbackData);
    return response.data;
  } catch (ex) {
    return { status: "error", error: ex };
  }
}

export async function fetchAllFeedbacks() {
    try {
      const url = createUrl("feedback");
      const response = await axios.get(url);
      return response.data;
    } catch (ex) {
      return { status: "error", error: ex };
    }
  }
