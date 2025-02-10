import axios from "axios";
import { createUrl } from "../utils";

export async function fetchProductDetails(productId) {
  try {
    const url = createUrl(`product/${productId}`);
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
    const response = await axios.get(url);
    return response.data;
  } catch (ex) {
    console.error("Error fetching all products:", ex); // Log the error
    return { status: "error", error: ex };
  }
}


