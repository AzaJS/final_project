import React from "react";
import AddProduct from "../components/AddProduct/AddProduct";
import AdminProductsList from "../components/AdminProductsList/AdminProductsList";
import { useAuth } from "../contexts/authContext";

const AdminPage = () => {
  const { handleLogout } = useAuth();
  return (
    <div className="container">
      <div
        className="btns"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <AddProduct />
        <button className="auth-btn" onClick={handleLogout}>
          LOG OUT
        </button>
      </div>
      <AdminProductsList />
    </div>
  );
};

export default AdminPage;
