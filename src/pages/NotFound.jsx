import React from "react";
import { Link } from "react-router-dom";
import { StarBackground } from "../components/StarBackground";

export const NotFound = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Star animation background */}
      <StarBackground />

      {/* Overlay content */}
      <div className="z-10 text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          <span className="text-gray-100">Oops! </span>
          <span className="text-primary-gradient">404</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          You’ve drifted off course. The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block primary hover:t ext-primary-gradient text-white px-6 py-3 rounded-full text-sm sm:text-base transition duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
