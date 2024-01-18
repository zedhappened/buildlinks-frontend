import React from "react";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
  return (
    <div className="absolute bottom-0 top-20 right-0 md:left-64 left-0 flex flex-col items-center justify-center">
      <h1 className="font-bold text-6xl py-2 text-primary">
        <FontAwesomeIcon icon={faExclamationCircle} />
      </h1>
      <p className="font-roboto text-black text-2xl font-bold text-center px-4">
        Choose a page from the sidebar to view it.
      </p>
    </div>
  );
};

export default Dashboard;
