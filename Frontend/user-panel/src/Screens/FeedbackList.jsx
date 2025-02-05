import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    // Fetch feedbacks from the backend
    axios
      .get("http://localhost:8090/feedback") // API endpoint to get all feedbacks
      .then((response) => {
        setFeedbacks(response.data); // Set the feedbacks state with the response data
      })
      .catch((error) => {
        toast.error("Failed to load feedbacks.");
        console.error(error);
      });
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="container">
      <h2 className="my-4">Feedback List</h2>
      <div>
        {feedbacks.length === 0 ? (
          <p>No feedback available.</p>
        ) : (
          <div className="feedback-list">
            {feedbacks.map((feedback) => (
              <div key={feedback.id} className="feedback-item card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{feedback.title}</h5>
                  <p className="card-text">{feedback.comment}</p>
                  <div className="rating">
                    <strong>Rating: </strong>
                    <span>{feedback.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Link to="/home/add-feedback" className="btn btn-primary">
        Add New Feedback
      </Link>
    </div>
  );
};

export default FeedbackList;
