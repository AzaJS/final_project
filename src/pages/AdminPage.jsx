import React from "react";
import { useAuth } from "../contexts/authContext";

const AdminPage = () => {
  const { handleLogout } = useAuth();
  return (
    <div>
      <button onClick={handleLogout}>LOG OUT</button>
    </div>
  );
};

export default AdminPage;
