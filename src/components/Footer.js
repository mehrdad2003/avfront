import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="mb-5 px-5 md:px-10 lg:px-20 relative z-10 flex items-end justify-between md:items-center mx-auto max-w-sreen-lg xl:max-w-screen-xl">
      <div className="flex flex-col md:flex-row justify-end items-end text-xs text-gray-500 font-medium tracking-wider">
       
        <Link to="/contacts" className="block md:mr-5">
          تماس
        </Link>
      </div>
    
    </div>
  );
}
