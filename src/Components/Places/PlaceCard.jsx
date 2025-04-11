import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const PlaceCard = ({
  img,
  title,
  location,
  description,
  handleOrderPopup,
}) => {
  return (
    <>
      <div
        className="shadow-lg transition-all duration-500 hover:shadow-2xl  text-white cursor-pointer "
        onClick={handleOrderPopup}
      >
        <div className="overflow-hidden">
          <img
            src={img}
            className="mx-auto h-[350px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>

        <div className="space-y-2 p-3">
          <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
          <div className="flex items-center gap-2  text-quaternary">
            <IoLocationSharp />
            <span >{location}</span>
          </div>
          <p className="line-clamp-2">{description}</p>
        </div>
      </div>
    </>
  );
};

export default PlaceCard;