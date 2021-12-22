import React from "react";
import { useAuth } from "../../contexts/authContext";
import "./Account.css";

const Account = () => {
  const { user, handleLogout } = useAuth();
  //   console.log(user.metadata.creationTime);
  return (
    <div className="account">
      {/* <div className="my-acc"></div> */}
      <div className="acc-info">
        <div>
          <h2>MY ACCOUNT | {user.email}</h2>
          <p>Fifth Member since {user.metadata.creationTime}</p>
        </div>
        <h3 className="order-history">Order history</h3>
        <div>No orders</div>
        <button className="btn-logout" onClick={handleLogout}>
          LOG OUT
        </button>
      </div>
    </div>
  );
};

export default Account;
