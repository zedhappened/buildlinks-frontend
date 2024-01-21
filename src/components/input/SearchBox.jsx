import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Form } from "react-router-dom";

const SearchBox = (props) => {
  return (
    <Form
      className={
        "flex flex-row rounded-md py-2 my-2 px-4 sm:pl-4 sm:px-0 text-secondary bg-white text-sm border shadow-inner " +
        props.className
      }
    >
      <input
        className=" basis-11/12 focus:outline-none"
        type="text"
        placeholder="Search"
        name="search"
        defaultValue={props.defaultValue}
      />
      <button className="basis-1/12">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </Form>
  );
};

export default SearchBox;
