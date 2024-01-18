import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/navbars/AdminNavbar";
import AdminSidebar from "../components/sidebars/AdminSidebar";

const AdminLayout = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <AdminNavbar show={show} setShow={setShow} />

      <AdminSidebar show={show} setShow={setShow} />
      <main
        className={
          "pt-20 md:ml-64" + (show ? " opacity-30 pointer-events-none" : "")
        }
      >
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
