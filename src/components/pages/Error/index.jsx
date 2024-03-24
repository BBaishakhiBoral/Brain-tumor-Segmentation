import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-full flex items-center justify-center ">
      <div className=" px-8 py-12 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Error 404</h2>
          <p className="text-lg text-gray-700 mb-4">
            Oops! The page you are looking for could not be found😭.
          </p>
          <Link
           to="/"
            className="text-blue-500 hover:underline focus:outline-none focus:underline"
          >
            Go back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
