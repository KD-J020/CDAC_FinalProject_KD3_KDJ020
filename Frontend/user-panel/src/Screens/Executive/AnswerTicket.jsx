import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getTicketById,
  updateTicketStatus,
} from "../../service/ExecutiveTicketService";

function AnswerTicket() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState(null);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const fetchTicket = async () => {
      const response = await getTicketById(id);
      setTicket(response);
    };
    fetchTicket();
  }, [id]);

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
    console.log(answer);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const upTicket = {
      id: ticket["id"],
      subject: ticket["subject"],
      description: ticket["description"],
      user_id: ticket["user_id"],
      executor_id: ticket["executor_id"],
      product_id: ticket["product_id"],
      answer: answer,
    };
    await updateTicketStatus(id, upTicket);
    navigate("/executive-home/resolve-tickets");
  };

  if (!ticket) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Answer Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            value={ticket.subject}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            value={ticket.description}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="answer" className="form-label">
            Answer
          </label>
          <textarea
            className="form-control"
            id="answer"
            value={answer}
            onChange={handleAnswerChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AnswerTicket;
