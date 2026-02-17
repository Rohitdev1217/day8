import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate("/User");
  };
  return (
    <div>
      <h1 className="text-2xl">User details</h1>

      <div className="mt-5 ">
        <h2>hii..{name}</h2>

        <button
          onClick={handleBackBtn}
          className="mt-2 bg-red-200 py-1 px-3 rounded-md cursor-pointer"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
