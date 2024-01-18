import React from "react";

const FileInput = (props) => {
  return (
    <input
      onChange={props.onChange}
      name={props.name}
      type={"file"}
      className={
        "my-2 border bg-white border-secondary rounded-sm shadow-inner px-3 py-2 text-sm max-sm:w-52 " +
        props.className
      }
      placeholder={props.placeholder}
      required={props.required}
    />
  );
};

export default FileInput;
