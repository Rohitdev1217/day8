import React from "react";
import Navbar from "./assets/Components/Navbar";
import Routing from "./assets/Utils/Routing";
const App = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Routing />
    </div>
  );
};

export default App;
