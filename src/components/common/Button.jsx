import React from "react";

const Button = ({ onClick, children, className }) => {
  return (
    <button
      className={`text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:outline-none focus:ring-sky-300 shadow-lg shadow-sky-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  ${className}`}
      onClick={onClick}
    >
   {children}
    </button>
  );
};

export default Button;
