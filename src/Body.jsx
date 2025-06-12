import React from "react";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { Outlet } from "react-router-dom";

const Body = ({ children }) => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
