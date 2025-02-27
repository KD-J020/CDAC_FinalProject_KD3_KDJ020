import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../Service/categoryService";

function AddCategory() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  // get navigate function
  const navigate = useNavigate();

  const onSave = async () => {
    if (title.length == 0) {
      // toast.warn("Please enter title");
    } else if (details.length == 0) {
      // toast.warn("Please enter details");
    } else {
      const result = await addCategory(title, details);
      console.log(title + details);
      navigate("/home/categories");
      if (result == "success") {
        // toast.success("Successfully added a category");
        navigate("/home/categories");
      } else {
        // toast.error(result["error"]);
      }
    }
  };

  const onCancel = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="container">
        <h2 className="header">Add Category</h2>
        <div className="mb-3">
          <label htmlFor="">Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Details</label>
          <input
            onChange={(e) => setDetails(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <button onClick={onSave} className="btn btn-success">
            Save
          </button>
          <button onClick={onCancel} className="btn btn-danger ms-2">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
