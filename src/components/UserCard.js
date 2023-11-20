// UserCard.jsx
import React from 'react';
import './css/UserCard.css'; // Ensure this CSS file exists and is correctly linked

const UserCard = ({ user }) => (
  <div className="user-card">
    <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="user-image" />
    <h3 className="user-name">{`${user.first_name} ${user.last_name}`}</h3>
    <p className="user-email">{user.email}</p>
    <p className="user-gender">Gender : {user.gender}</p>
    <p className="user-domain">Domain : {user.domain}</p>
    <div className='avail'>
    <div className={`availability-indicator ${user.available ? 'available' : 'not-available'}`}></div>
    <p className='user-name'>{user.available ? 'Available' : 'Not Available'}</p>
    </div>
  </div>
);

export default UserCard;
