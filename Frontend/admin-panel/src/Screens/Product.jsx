import { useEffect, useState } from "react";

import ProductRow from "../Components/ProductRow";
import { Link } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);

  //   const onLoadProducts = async () => {
  //     const result = await getProductList();
  //     console.log(result);
  //     if (result["status"] == "success") {
  //       setProducts(result["data"]);
  //     } else {
  //       toast.error(result["error"]);
  //     }
  //   };

  //   useEffect(() => {
  //     onLoadProducts();
  //   }, []);

  return (
    <div>
      <div className="container">
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
                    id={product["id"]}
                    title={product["title"]}
                    details={product["details"]}
                    price={product["price"]}
                    image={product["image"]}
                    tags={product["tags"]}
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
