import { useEffect, useState } from "react";

import ProductRow from "../Components/ProductRow";
import { Link } from "react-router-dom";
import { deleteProduct, getProducts } from "../Service/productService";

function Product() {
  const [products, setProducts] = useState([]);

  const onLoadProducts = async () => {
    const result = await getProducts();
    console.log(result);
    setProducts(result);
  };

  const onDelete = async (id) => {
    const result = await deleteProduct(id);
    onLoadProducts();
  };

  useEffect(() => {
    onLoadProducts();
  }, []);

  return (
    <div className="container-fluid">
      <div className="container ">
        <h2 className="header">Products</h2>

        <Link className="btn btn-success mb-3" to="/home/add-product">
          Add
        </Link>
        {products.length == 0 && (
          <h4>There are no products, please use add button to add one</h4>
        )}
        {products.length > 0 && (
          <table className="table table-hover">
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Title</th>
                <th>Details</th>
                <th>Price</th>
                <th>Tags</th>
                <th style={{ width: 135 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <ProductRow
                    key={product["id"]}
                    id={product["id"]}
                    title={product["title"]}
                    details={product["description"]}
                    price={product["price"]}
                    image={product["image"]}
                    tags={""}
                    cid={product["cid"]}
                    onDelete={onDelete}
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

export default Product;
