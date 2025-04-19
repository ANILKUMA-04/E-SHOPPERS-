import React from 'react';
import '../styles/Account.css';

const Account = () => {
  const user = {
    name: 'Shiva Ram',
    email: 'shivaram@gmail.com',
    address: '123 E-Shopper Lane, Suite 100, Hyderabad, India',
  };

  return (
    <div className="account-container">
      <h2>My Account</h2>
      <div className="account-details">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Address:</strong> {user.address}</p>
      </div>
      <button className="update-button">Update Information</button>
    </div>
  );
};

export default Account;