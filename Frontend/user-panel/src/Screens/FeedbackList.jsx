import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchAllFeedbacks } from "../Service/feedbackService";
import axios from "axios";
import { createUrl } from "../utils";
import "../Styles/FeedBackList.css";

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [expandedFeedback, setExpandedFeedback] = useState(null);
  const userId = 2; 
  useEffect(() => {
    const loadFeedbacks = async () => {
      const result = await fetchAllFeedbacks(userId);
      if (result.status === "error") {
    // Fetch feedbacks from the backend
    axios.get(createUrl("feedback")) // API endpoint to get all feedbacks
      .then((response) => {
        setFeedbacks(response.data); // Set the feedbacks state with the response data
      })
      .catch((error) => {
        toast.error("Failed to load feedbacks.");
        console.error(result.error);
      } )}else {
        setFeedbacks(result);
      }
    };
    loadFeedbacks();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const toggleReadMore = (feedbackId) => {
    setExpandedFeedback(expandedFeedback === feedbackId ? null : feedbackId);
  };

  return (
    <div className="container">
      <h2 className="my-4">Feedback List</h2>
      <div  className="feedback-list">
        {feedbacks.length === 0 ? (
          <p className="text-center">No feedback available.</p>
        ) : (
            feedbacks.map((feedback) => (
              <div key={feedback.id} className="feedback-card">
               {/* Left Side: Product Details */}
              <div className="product-info">
                <img
                  src={`data:image/jpeg;base64,${feedback.productImage}`}
                  alt={feedback.productName}
                  className="product-image"
                />
                <div>
                  <h5 className="product-name">{feedback.productName}</h5>
                  <p className="product-price">₹{feedback.productPrice.toFixed(2)}</p>
                  <p className="order-date">
                    <strong>Ordered On: </strong>
                    {new Date(feedback.orderedDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Right Side: Feedback Details */}
              <div className="feedback-details">
                <h5 className="feedback-title">{feedback.title}</h5>
                <p className="feedback-comment">
                  {expandedFeedback === feedback.id
                    ? feedback.comment
                    : feedback.comment.length > 100
                    ? feedback.comment.substring(0, 100) + "..."
                    : feedback.comment}
                  {feedback.comment.length > 100 && (
                    <button
                      className="read-more-btn"
                      onClick={() => toggleReadMore(feedback.id)}
                    >
                      {expandedFeedback === feedback.id ? "Read Less" : "Read More"}
                    </button>
                  )}
                </p>

                {/* Rating Stars */}
                <div className="rating">
                  <strong>Rating: </strong>
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className={`star ${index < feedback.rating ? "filled" : ""}`}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeedbackList;