import React from "react";

function PurchaseHistory() {
  const purchases = [
    {
      id: 1,
      name: "Product A",
      image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
      purchasePrice: "â‚¹100",
      orderDate: "2024-01-01",
    },
    {
      id: 2,
      name: "Product B",
      image: "https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg",
      purchasePrice: "â‚¹200",
      orderDate: "2024-02-01",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Purchase History Page</h1>
      <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "#438a84", color:"white" }}>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>ID</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Image</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Purchase Price</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Order Date</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase) => (
              <tr key={purchase.id}>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{purchase.id}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{purchase.name}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  <img src={purchase.image} alt={purchase.name} style={{ width: "100px", height:"100px" }} />
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{purchase.purchasePrice}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{purchase.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PurchaseHistory;