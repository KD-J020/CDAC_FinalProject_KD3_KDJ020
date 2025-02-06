import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFeedbackById } from "../Service/feedbackService";

function FeedbackDetails() {
  const { id } = useParams();
  const [feedback, setFeedback] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadFeedback = async () => {
      try {
        const result = await getFeedbackById(id);
        setFeedback(result);
      } catch (error) {
        console.error("Error loading feedback:", error);
      }
    };
    loadFeedback();
  }, [id]);

  if (!feedback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Feedback Details</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{feedback.title}</h5>
          <p className="card-text">
            <strong>Comments:</strong> {feedback.comment}
          </p>
          <p className="card-text">
            <strong>Ratings:</strong> {feedback.rating}
          </p>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackDetails;
