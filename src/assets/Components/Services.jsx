import React, { useEffect, useState } from "react";

const Services = () => {
  const [first, setFirst] = useState("this is normal data ");
  const [second, setSecond] = useState("this is very large data ");

  useEffect(() => {
    console.log("services components created");
    return () => {
      console.log("servies componet deleted.");
    };
  }, []);
  return (
    <div>
      <h2>{first}</h2>
      <button
        onClick={() => setFirst("here is no data found")}
        className="bg-blue-300 py-1 px-3 rounded-md text-sm cursor-pointer"
      >
        you can change this data!
      </button>
      <h2 className="mt-2">{second}</h2>
      <button
        onClick={() => setSecond("please check you data")}
        className="bg-red-300 py-1 px-3 rounded-md text-sm cursor-pointer"
      >
        you can change this data!
      </button>
    </div>
  );
};

export default Services;
