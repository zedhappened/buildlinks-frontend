import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type ?? "submit"}
      name={props.name}
      value={props.value}
      className={
        "rounded-md py-2 my-2 text-white text-sm border shadow-sm " +
        props.className
      }
      id={props.id}
    >
      {props.children}
    </button>
  );
};

export default Button;
