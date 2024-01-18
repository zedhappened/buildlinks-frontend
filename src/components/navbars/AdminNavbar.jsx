import {
  faBars,
  faRightFromBracket,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../../features/userSlice";

const AdminNavbar = ({ setShow, show }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <header className="fixed mb-20 w-full h-20 flex flex-row bg-secondary z-20 shadow-lg">
      <div className="basis-5/6 hidden md:flex flex-row px-24 items-end py-4">
        <Link to={"/admin"} className="text-2xl font-bold text-neutral">
          Buildlinks Admin Panel
        </Link>
      </div>

      <div className="basis-1/6 md:hidden flex flex-row items-center px-8 pt-2">
        <button
          type="button"
          onClick={() => {
            setShow((prev) => !prev);
          }}
          className="text-lg font-bold text-neutral"
        >
          {show ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>

      <div className="md:basis-1/6 basis-5/6 flex flex-row-reverse mt-2 items-center px-4 md:px-12 gap-x-4 md:gap-x-8 text-sm md:text-md font-bold text-red-400">
        <Link
          to={"/"}
          className="flex flex-row items-center gap-2 hover:text-primary"
        >
          Exit <FontAwesomeIcon icon={faRightFromBracket} />
        </Link>

        <button
          type="button"
          onClick={() => {
            dispatch(signOut());
            navigate("/");
          }}
          className="flex flex-row items-center gap-2 hover:text-primary"
        >
          Logout <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </header>
  );
};

export default AdminNavbar;
