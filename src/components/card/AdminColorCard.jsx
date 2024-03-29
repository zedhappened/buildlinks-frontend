import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Form, Link } from "react-router-dom";
import ColorCard from "./ColorCard";

const AdminColorCard = ({ color }) => {
  return (
    <div className="flex flex-col w-56 h-60 border hover:border-primary transition-all ease-in-out rounded-sm bg-dull">
      <div className="flex justify-center items-center basis-7/12">
        <ColorCard colorImage={color.colorImage} colorName={color.colorName} />
      </div>
      <div className="basis-5/12 bg-neutral">
        <div className="flex flex-row">
          <div
            method="patch"
            className="basis-1/2 py-1 text-center shadow-inner text-secondary border"
          >
            <Link to={`create?id=${color._id}`}>
              <FontAwesomeIcon icon={faEdit} />
            </Link>
          </div>
          <Form
            replace
            method="delete"
            className="basis-1/2 py-1 text-center shadow-inner text-primary border"
          >
            <button name="id" value={color._id} type="submit">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </Form>
        </div>
        <p className="text-xs px-4 py-2 border-t">
          <b>Name:</b> {color.colorName}
        </p>
        <p className="text-xs px-4 py-2 border-t">
          <b>Code:</b> {color.colorCode}
        </p>
      </div>
    </div>
  );
};

export default AdminColorCard;
