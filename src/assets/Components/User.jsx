import React from "react";
import { Link } from "react-router-dom";
const User = () => {
  return (
    <div className="flex flex-col w-fit  gap-3 ">
      <Link
        className="bg-zinc-500 py-2 px-3 rounded-md text-white"
        to="/User/Rohit"
      >
        noice
      </Link>
      <Link
        className="bg-zinc-500 py-2 px-3 rounded-md text-white"
        to="/User/sunil"
      >
        Sunil
      </Link>
      <Link
        className="bg-zinc-500 py-2 px-3 rounded-md text-white"
        to="/User/john"
      >
        John
      </Link>
    </div>
  );
};

export default User;
