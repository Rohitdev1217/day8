import React, { useEffect, useState } from "react";

const Services = () => {
  const [first, setFirst] = useState("this is normal data");
  const [second, setSecond] = useState("ya this also change it after click");

  useEffect(() => {
    console.log("created");
    return () => {
      console.log("deleted");
    };
  }, [first]);
  return (
    <div>
      <div>
        <h2>{first}</h2>
        <button
          className="bg-blue-300  py-1 px-2 rounded-md"
          onClick={() => setFirst("'boom' change this data")}
        >
          click here and will be change data
        </button>
      </div>
      <div>
        <h2>{second}</h2>
        <button
          className="bg-red-300  py-1 px-2 rounded-md"
          onClick={() => setSecond(" you see change it ")}
        >
          click here and will be change data
        </button>
      </div>
    </div>
  );
};

export default Services;
