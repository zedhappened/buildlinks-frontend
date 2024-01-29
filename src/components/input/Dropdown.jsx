import React from "react";

const Dropdown = (props) => {
  return (
    <select
      name={props.name}
      defaultValue={props.defaultValue}
      className={
        "my-2 border bg-white border-secondary rounded-sm shadow-inner px-3 py-2 text-sm " +
        props.className
      }
    >
      <option value={""}>{props.placeholder}</option>
      {props.optionList.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
