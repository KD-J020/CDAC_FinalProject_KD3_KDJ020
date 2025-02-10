import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../Service/ProductService"; // Import your service
import "../Styles/productzoom.css";
function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [feedbacks, setFeedbacks] = useState([]);
  const [newFeedback, setNewFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowImageModal(true);
  };

  const closeModal = () => {
    setShowImageModal(false);
    setSelectedImage('');
  };

  useEffect(() => {
    const loadProductDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await fetchProductDetails(id);
        setProduct(result);

        if (result.image) {
          setImageSrc(`data:image/jpeg;base64,${result.image}`);
        }

        if (result.feedbacks) {
          setFeedbacks(result.feedbacks);
        }

        if (result.rating) {
          setRating(result.rating);
        }
      } catch (err) {
        console.error("Error in ProductDetail component:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadProductDetails();
    } else {
      setError("No product ID provided.");
      setLoading(false);
    }
  }, [id]);

  const handleFeedbackSubmit = () => {
    if (newFeedback) {
      const updatedFeedbacks = [...feedbacks, { text: newFeedback, date: new Date() }];
      setFeedbacks(updatedFeedbacks);
      setNewFeedback(""); // Clear the input
      alert("Thank you for your feedback!");
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => setRating(i)}
          style={{
            cursor: "pointer",
            color: i <= rating ? "#ffc107" : "#e4e5e9",
            fontSize: "1.5rem",
          }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  if (loading) return <div className="text-center mt-5">Loading product details...</div>;
  if (error) return <div className="alert alert-danger text-center mt-5">{error}</div>;
  if (!product) return <div className="text-center mt-5">Product not found.</div>;

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0">
        <div className="row g-0">
          <div className="col-md-5">
            {imageSrc && (
              <img
                src={imageSrc}
                alt={product.title}
                className="img-fluid rounded-start"
                style={{ cursor: 'pointer', objectFit: 'cover', height: '300px' }}
                onClick={() => handleImageClick(imageSrc)}
              />
            )}
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h2 className="card-title text-primary fw-bold">{product.title}</h2>
              <hr />
              <p className="card-text">
                <span className="fw-bold">Specifications:</span> {product.description}
              </p>
              <p className="card-text">
                <span className="fw-bold">Price:</span> ₹{product.price}
              </p>
              <div className="my-3">
                <span className="fw-bold">Rating: </span>
                {renderStars()}
              </div>
              <hr />
              <div className="mt-4">
                <h4 className="text-secondary">Feedbacks</h4>
                <ul className="list-group">
                  {feedbacks.length > 0 ? (
                    feedbacks.map((fb, index) => (
                      <li key={index} className="list-group-item">
                        <p>{fb.text}</p>
                        <small className="text-muted">{new Date(fb.date).toLocaleString()}</small>
                      </li>
                    ))
                  ) : (
                    <li className="list-group-item">No feedback available.</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <div className={`modal ${showImageModal ? 'show' : ''}`} onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <img src={selectedImage} alt="Full-size" />
          <button className="close-btn" onClick={closeModal}>×</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
