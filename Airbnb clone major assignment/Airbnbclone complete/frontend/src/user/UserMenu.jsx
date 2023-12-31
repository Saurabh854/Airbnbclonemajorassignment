import React from "react";
import { Link, useLocation } from "react-router-dom";

const UserMenu = () => {
  const location = useLocation();

  function isActive(subpage) {
    return location.pathname.includes(subpage);
  }

  return (
    <>
      <div className="flex gap-6 mx-auto items-center justify-center">
        <Link
          className={`${
            isActive("profile") ? "bg-red-500 text-white" : "text-black-500"
          } px-4 py-2 rounded-full outline outline-1 inline-flex gap-1 hover:scale-110 transform transition duration-400`}
          to="/dashboard/user/profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          Account
        </Link>
        <Link
          className={`${
            isActive("bookings") ? "bg-red-500 text-white" : "text-black-500"
          } px-4 py-2 rounded-full outline outline-1 inline-flex gap-1 hover:scale-110 transform transition duration-400`}
          to="/dashboard/user/bookings"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          Bookings
        </Link>
        <Link
          className={`${
            isActive("place") ? "bg-red-500 text-white" : "text-black-500"
          } px-4 py-2 rounded-full outline outline-1 inline-flex gap-1 hover:scale-110 transform transition duration-400`}
          to="/dashboard/user/place"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
            />
          </svg>
          Accommodations
        </Link>
      </div>
    </>
  );
};

export default UserMenu;
