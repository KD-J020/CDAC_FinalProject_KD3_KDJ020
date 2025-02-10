import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { addFeedback } from "../service/feedbackService"; // Import service function
import { createUrl } from "../utils";
import axios from "axios";

const AddFeedback = () => {
  const [productId, setProductId] = useState("");
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const userId = 1; // Replace with dynamic user ID if needed

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
    // Feedback data object
    const feedbackData = {
      title,
      comment,
      rating,
      productId,
    };

    // Send POST request to backend
    axios
      .post(createUrl(`feedback/1/${productId}`, feedbackData)) // 1 is the userId, change it dynamically if needed
      .then((response) => {
        toast.success("Feedback submitted successfully!");
        navigate("/home/feedback-list"); // Navigate back to the feedback list
      })
      .catch((error) => {
        toast.error("Failed to submit feedback.");
        console.error(error);
      });
  };

  return (
    <div className="container">
      <h2 className="my-4">Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="productId" className="form-label">Product ID</label>
          <input
            type="number"
            className="form-control"
            id="productId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            required
          />
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
