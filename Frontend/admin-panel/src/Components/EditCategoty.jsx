import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addCategory,
  getCategory,
  updateCategory,
} from "../services/categoryService";

function EditCategoty() {
  const { id } = useParams();

  const [title, setTitle] = useState();
  const [details, setDetails] = useState();

  // get navigate function
  const navigate = useNavigate();

  const effect = useEffect(() => {
    getCategorie();
  }, []);

  const getCategorie = async () => {
    const result = await getCategory(id);
    console.log(result);
    setTitle(result["title"]);
    setDetails(result["details"]);
  };

  const onUpdate = async () => {
    if (title.length == 0) {
      // toast.warn("Please enter title");
    } else if (details.length == 0) {
      // toast.warn("Please enter details");
    } else {
      const result = await updateCategory(id, title, details);

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
        <h2 className="header">Edit Category</h2>
        <div className="mb-3">
          <label htmlFor="">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Details</label>
          <input
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <button className="btn btn-success" onClick={onUpdate}>
            Update
          </button>
          <button onClick={onCancel} className="btn btn-danger ms-2">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditCategoty;
