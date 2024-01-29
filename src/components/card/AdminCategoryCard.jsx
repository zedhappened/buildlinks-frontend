import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Form, Link } from "react-router-dom";

const AdminCategoryCard = ({ category, parent }) => {
  return (
    <div className="flex flex-col w-60 border hover:border-primary transition-all ease-in-out rounded-sm bg-dull">
      <div className="flex justify-center items-center">
        <img
          className="w-full"
          src={
            category.image ||
            require("../../assets/images/category-placeholder.svg").default
          }
          alt=""
        />
      </div>
      <div className="bg-neutral">
        <div className="flex flex-row">
          <div
            method="patch"
            className="basis-1/2 py-1 text-center shadow-inner text-secondary border"
          >
            <Link to={`create?id=${category._id}`}>
              <FontAwesomeIcon icon={faEdit} />
            </Link>
          </div>
          <Form
            replace
            method="delete"
            className="basis-1/2 py-1 text-center shadow-inner text-primary border"
          >
            <button name="id" value={category._id} type="submit">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </Form>
        </div>
        <p className="text-xs px-4 py-2 border-t">
          <b>Name:</b> {category.name}
        </p>
        <p className="text-xs overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 border-t">
          <b>Description:</b> {category.description}
        </p>
        <p className="text-xs overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 border-t">
          <b>Parent:</b> {category.parent ? parent.name : "None"}
        </p>
        <p className="text-xs px-4 py-2 border-t">
          <b>Top Category:</b> {category.topCategory.toString()}
        </p>
        <p className="text-xs px-4 py-2 border-t">
          <b>Show on Home:</b> {category.showOnHome.toString()}
        </p>
      </div>
    </div>
  );
};

export default AdminCategoryCard;
