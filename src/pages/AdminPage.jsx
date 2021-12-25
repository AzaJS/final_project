import React from "react";
import { useNavigate } from "react-router-dom";
import AddProduct from "../components/AddProduct/AddProduct";
import AdminProductsList from "../components/AdminProductsList/AdminProductsList";
import { useAuth } from "../contexts/authContext";

const AdminPage = () => {
  const navigate = useNavigate();
  const { user, handleLogout } = useAuth();
  const onFinish = () => {
    handleLogout();
    navigate("/auth");
  };
  console.log(user);
  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <AddProduct />
        <button className="auth-btn" onClick={onFinish}>
          LOG OUT
        </button>
      </div>
      <AdminProductsList />
    </div>
  );
};

export default AdminPage;
