import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import User from "../Components/User";
import About from "../Components/About";
import UserDetails from "../Components/UserDetails";
import Services from "../Components/Services";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/User" element={<User />} />
      <Route path="/User/:name" element={<UserDetails />} />
      <Route path="/About" element={<About />} />
      <Route path="/Services" element={<Services />} />
    </Routes>
  );
};

export default Routing;
