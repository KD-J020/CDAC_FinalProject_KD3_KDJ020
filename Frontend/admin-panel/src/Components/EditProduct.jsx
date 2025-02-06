import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateProduct } from "../Service/productService";

function EditProduct() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, title, details, price, tags, image, cid } = location.state;

  const [productTitle, setProductTitle] = useState(title);
  const [productDetails, setProductDetails] = useState(details);
  const [productPrice, setProductPrice] = useState(price);
  const [productTags, setProductTags] = useState(tags);
  const [productImage, setProductImage] = useState(image);

  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (productImage) {
      setImageSrc(`data:image/jpeg;base64,${productImage}`);
    }
  }, [productImage]);

  const handleSave = async () => {
    const updatedProduct = {
      id,
      cid,
      title: productTitle,
      description: productDetails,
      price: productPrice,
      tags: productTags,
      image: productImage,
    };
    await updateProduct(updatedProduct, id);
    navigate("/home/product");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result.split(",")[1];
      setProductImage(base64String);
      setImageSrc(`data:image/jpeg;base64,${base64String}`);
    };
    reader.readAsDataURL(file);
  };

  const onCancel = () => {
    navigate(-1);
  };

  return (
    <div className="container mt-5">
      <h2>Edit Product</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={productTitle}
              onChange={(e) => setProductTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="details" className="form-label">
              Details
            </label>
            <input
              type="text"
              className="form-control"
              id="details"
              value={productDetails}
              onChange={(e) => setProductDetails(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tags" className="form-label">
              Tags
            </label>
            <input
              type="text"
              className="form-control"
              id="tags"
              value={productTags}
              onChange={(e) => setProductTags(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image
            </label>
            <input
              type="file"
              className="form-control"
              id="image"
              onChange={handleImageChange}
            />
          </div>
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>

          <button className="btn btn-danger ms-2" onClick={onCancel}>
            Cancel
          </button>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Product Image</h5>
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt="Product"
                  className="img-fluid"
                  style={{ width: 400, height: 400 }}
                />
              ) : (
                <span>No Image</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
