import React from "react";

const AllDetails = ({ order }) => {
  const { productName, bids } = order;

  return (
    <table className="border-collapse w-full">
      <thead>
        <tr className="border-b dark:bg-gray-900 dark:border-gray-700 text-md">
          <th className="px-3 py-2">Product Name</th>
          <th className="px-3 py-2">User Name</th>
          <th className="px-3 py-2">Bid Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-3 py-2">{productName}</td>
          {bids.map((bid, index) => (
            <React.Fragment key={index}>
              <td className="px-3 py-2">{bid.userName}</td>
              <td className="px-3 py-2">{bid.price}</td>
            </React.Fragment>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default AllDetails;
