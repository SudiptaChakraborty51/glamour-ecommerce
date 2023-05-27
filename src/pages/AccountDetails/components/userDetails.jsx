import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/authContext';
import "../accountDetails.css";

const UserDetails = () => {
    const {authState, userLogout} = useContext(AuthContext);
  return (
    <div className='user-details'>
        <p>
          <strong>Full Name:</strong> {authState?.user?.firstName}{" "}
          {authState?.user?.lastName}
        </p>
        <p>
          <strong>Email:</strong> {authState?.user?.email}
        </p>
        <button onClick={userLogout} className="logout-btn">
          Logout
        </button>
    </div>
  )
}

export default UserDetails
