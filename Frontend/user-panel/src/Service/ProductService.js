import axios from "axios";
import { createUrl } from "../utils";

export async function fetchProductDetails(productId) {
  try {
    const url = createUrl(`product/${productId}`);
    console.log("Fetching product details from URL:", url); // Log the URL
    const response = await axios.get(url);
    console.log("Product details response:", response.data); // Log the response
    return response.data;
  } catch (ex) {
    console.error("Error fetching product details:", ex); // Log the error
    return { status: "error", error: ex };
  }
}

export async function fetchAllProducts() {
  try {
    const url = createUrl("product");
    console.log("Fetching all products from URL:", url); // Log the URL
    const response = await axios.get(url);
    console.log("All products response:", response.data); // Log the response
    return response.data;
  } catch (ex) {
    console.error("Error fetching all products:", ex); // Log the error
    return { status: "error", error: ex };
  }

}


// Fetch feedbacks for a specific product by ID
export async function fetchFeedbackByProductId(productId) {
  try {
    const url = createUrl(`product/${productId}/feedback`);
    console.log("Fetching feedbacks from URL:", url); // Log the URL for debugging
    const response = await axios.get(url);
    console.log("Feedbacks response:", response.data); // Log the feedbacks
    return response.data;
  } catch (ex) {
    console.error("Error fetching feedbacks:", ex); // Log the error
    return { status: "error", error: ex };
  }
}
