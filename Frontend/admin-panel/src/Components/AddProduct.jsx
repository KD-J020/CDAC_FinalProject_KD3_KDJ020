import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategoryList } from "../Service/categoryService";
import { toast } from "react-toastify";
import { addProduct } from "../Service/productService";

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

  const onLoadCategories = async () => {
    const result = await getCategoryList();
    setCategories(result);
    if (result["status"] == "success") {
    } else {
      //   toast.error(result["error"]);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const arrayBuffer = reader.result;
      const bytes = new Uint8Array(arrayBuffer);
      setImage(Array.from(bytes));
    };
    reader.readAsArrayBuffer(file);
  };

  const onSave = async () => {
    if (title.length == 0) {
      toast.warn("Please enter title");
    } else if (details.length == 0) {
      toast.warn("Please enter details");
    } else if (tags.length == 0) {
      toast.warn("Please enter tags");
    } else if (price.length == 0) {
      toast.warn("Please enter price");
    } else if (categoryId.length == 0) {
      console.log(categoryId);
      toast.warn("Please select category");
    } else if (!image) {
      toast.warn("Please select image");
    } else {
      // console.log(title, Number(cid), description, price, image);
      const result = await addProduct(
        title,
        Number(categoryId),
        details,
        price,
        image
      );

      toast.success("Successfully added a product");
      navigate(-1);
    }
  };

  const effect = useEffect(() => {
    onLoadCategories();
  }, []);

  const onCancel = () => {
    navigate(-1);
  };

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
                // onChange={(e) => {
                //   // get the first image selected by user
                //   setImage(e.target.files[0]);
                // }}
                onChange={handleImageChange}
                type="file"
                className="form-control"
                accept="image/*"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button className="btn btn-success" onClick={onSave}>
              Save
            </button>
            <button onClick={onCancel} className="btn btn-danger ms-3">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
