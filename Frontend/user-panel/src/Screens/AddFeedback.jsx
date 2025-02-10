import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { createUrl } from "../utils";
import { addFeedback } from "../Service/feedbackService"; 

const AddFeedback = () => {
  const [orderedProducts, setOrderedProducts] = useState([]); 
  const [productId, setProductId] = useState(""); 
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const userId = 2; 
 
  useEffect(() => {
    const fetchOrderedProducts = async () => {
      try {
        const response = await axios.get(createUrl(`home/History/Purchases/user/${userId}`));
        const data = response.data;

        if (data && Array.isArray(data)) {
          const uniqueProducts = data
            .filter((order) => order.product_id !== null && order.productName !== null) 
            .map((order) => ({
              id: order.product_id,
              name: order.productName, 
            }))
            .reduce((acc, product) => {
              if (!acc.some((p) => p.id === product.id)) {
                acc.push(product); 
              }
              return acc;
            }, []);

          console.log("Processed products:", uniqueProducts);
          setOrderedProducts(uniqueProducts);
        } else {
          console.error("Unexpected response structure:", data);
        }
      } catch (error) {
        console.error("Error fetching ordered products:", error);
      }
    };

    fetchOrderedProducts();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productId || !title || !comment || !rating) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      await addFeedback(userId, productId, title, comment, rating);
      toast.success("Feedback submitted successfully!");
      navigate("/home/feedback-list");
    } catch (error) {
      toast.error("Failed to submit feedback.");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Submit Feedback</h2>
      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="productId" className="form-label">Select Product</label>
          <select
            className="form-control"
            id="productId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            required
          >
            <option value="">Select a Product</option>
            {orderedProducts.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name} 
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Feedback Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="comment" className="form-label">Comment</label>
          <textarea
            className="form-control"
            id="comment"
            rows="3"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating (1-5)</label>
          <input
            type="number"
            className="form-control"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit Feedback</button>
      </form>
    </div>
  );
};

export default AddFeedback;
