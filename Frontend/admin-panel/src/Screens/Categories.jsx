import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteCategory, getCategoryList } from "../services/categoryService";
import Row from "../Components/Row";

function Categories() {
  // used to load all the categories
  const [categories, setCategories] = useState([]);

  const onLoadCategories = async () => {
    const result = await getCategoryList();
    setCategories(result);
    if (result["status"] == "success") {
    } else {
      //   toast.error(result["error"]);
    }
  };

  useEffect(() => {
    // load all categories when this component is loaded on the screen
    onLoadCategories();
  }, []);

  const onDeleteCategory = async (id) => {
    const result = await deleteCategory(id);
    if (result["status"] == "success") {
      //   toast.success("Successfully deleted selected category");

      // refresh the screen
      onLoadCategories();
    } else {
      //   toast.error(result["error"]);
    }
  };

  return (
    <div>
      <div className="container">
        <h2 className="header">Categories</h2>

        <Link className="btn btn-success" to="/home/add-category">
          Add
        </Link>
        {categories.length == 0 && (
          <h3 className="mt-3">
            There are no categories. Please use add button to add one.
          </h3>
        )}

        {categories.length > 0 && (
          <table className="table-hover table mt-3">
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Title</th>
                <th>Details</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => {
                return (
                  <Row
                    id={category["id"]}
                    title={category["title"]}
                    details={category["details"]}
                    onDelete={onDeleteCategory}
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

export default Categories;
