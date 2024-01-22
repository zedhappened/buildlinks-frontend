import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/navbars/AdminNavbar";
import AdminSidebar from "../components/sidebars/AdminSidebar";
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </main>
    </>
  );
};

export default AdminLayout;
