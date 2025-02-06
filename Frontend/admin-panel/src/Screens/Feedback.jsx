import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FeedbackRow from "../Components/FeedbackRow";

import {
  deleteCategory,
  getCategoryList,
  updateCategory,
} from "../Service/categoryService";
import { getAllFeedbacks } from "../Service/feedbackService";

function Feedback() {
  // used to load all the categories
  const [feedbacks, setFeedbacks] = useState([]);

  const onLoadFeedback = async () => {
    const result = await getAllFeedbacks();
    console.log(result[0]);
    setFeedbacks(result);
  };

  // const handleRowClick = (id) => {
  //   navigate(`/feedback/${id}`);
  // };

  useEffect(() => {
    // load all categories when this component is loaded on the screen
    onLoadFeedback();
  }, []);
  const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        <h2 className="header">Feedbacks</h2>

        {feedbacks.length == 0 && (
          <h3 className="mt-3">There are no Feedbacks.</h3>
        )}
        {feedbacks.length > 0 && (
          <table className="table-hover table mt-3">
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Title</th>
                <th>Comments</th>
                <th>Ratings</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((Feedback) => {
                return (
                  <FeedbackRow
                    key={Feedback["id"]}
                    id={Feedback["id"]}
                    title={Feedback["title"]}
                    comment={Feedback["comment"]}
                    rating={Feedback["rating"]}
                    // click={handleRowClick}
                  />
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Feedback;
