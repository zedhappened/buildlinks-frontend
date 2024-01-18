import React from "react";

const ColorCard = ({ colorImage, colorName }) => {
  return (
    <div className="bg-white h-20 w-24 border shadow-sm rounded-b-md">
      <div className="h-12 bg-accent">
        <img className="h-full w-full object-cover" src={colorImage} alt="" />
      </div>
      <p className="w-full text-center h-8 flex items-center justify-center text-xs">
        {colorName}
      </p>
    </div>
  );
};

export default ColorCard;
