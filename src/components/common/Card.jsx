import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Card = ({
  imageUrl,
  title,
  description = "lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
  disabled = false,
  onClickLocation="/"
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`relative overflow-hidden rounded-lg shadow-2xl w-96 h-60 group ${
        disabled ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      <img
        src={imageUrl}
        alt={title}
        className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black opacity-75" />
      {/* Black overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center w-full p-4 text-sky-200">
        <h2 className="text-3xl transition-all duration-300 opacity-100 group-hover:opacity-0 px-4 group-hover:-translate-y-10 ">
          {title}
        </h2>
        <p className="absolute px-4 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {description}
        </p>
      </div>

      {!disabled && (
        <div className="absolute bottom-0 left-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button onClick={()=>navigate(onClickLocation)}>
            Try Now <span>&#x2192;</span>
           
          </Button>
        </div>
      )}
    </div>
  );
};

export default Card;
