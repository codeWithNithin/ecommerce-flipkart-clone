import React from "react";
import Header from "../../Header/Header";
import { Outlet } from "react-router-dom";

const Common = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Common;
