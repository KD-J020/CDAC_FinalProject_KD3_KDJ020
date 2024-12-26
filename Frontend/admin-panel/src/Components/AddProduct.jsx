import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [tags, setTags] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [brandId, setBrandId] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  return (
    <div>
      <div className="container p-5 pt-1">
        <h2 className="header">Add Product</h2>

        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="">Title</label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="">Category</label>
              <select
                onChange={(e) => setCategoryId(e.target.value)}
                className="form-control"
              >
                {categories.map((category) => {
                  return (
                    <option value={category["id"]}>{category["title"]}</option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="">Brand</label>
              <select
                onChange={(e) => setBrandId(e.target.value)}
                className="form-control"
              >
                {brands.map((brand) => {
                  return <option value={brand["id"]}>{brand["title"]}</option>;
                })}
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="">Tags</label>
              <input
                onChange={(e) => setTags(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="">Price</label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="">Details</label>
              <textarea
                onChange={(e) => setDetails(e.target.value)}
                rows="3"
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="">Image</label>
              <input
                onChange={(e) => {
                  // get the first image selected by user
                  setImage(e.target.files[0]);
                }}
                type="file"
                className="form-control"
                accept="image/*"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button className="btn btn-success">Save</button>
            <button className="btn btn-danger ms-3">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
