import React from 'react';

const AdminDetails = ({ order }) => {
  const { productName, bids } = order;

  return (
    <table className="border-collapse w-full">
      <thead>
        <tr className="border-b dark:bg-gray-900 dark:border-gray-700 text-md">
          <th className="px-3 py-2 text-primary">Product Name</th>
          <th className="px-3 py-2 text-primary">User Name</th>
          <th className="px-3 py-2 text-primary">Email</th>
          <th className="px-3 py-2 text-primary">Price</th>
        </tr>
      </thead>
      <tbody>
        {bids.map((bid, index) => (
          <tr key={index} className="border-b dark:bg-gray-900 dark:border-gray-700 text-md">
            <td className="px-3 py-2">{productName}</td>
            <td className="px-3 py-2">{bid.userName}</td>
            <td className="px-3 py-2">{bid.email}</td>
            <td className="px-3 py-2">{bid.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminDetails;
