import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

type Props = {};

const LayoutsApp = (props: Props) => {
  return (
    <>
      <Navbar />
      <section className="py-20 px-4 w-full mx-auto">
        <Outlet />
      </section>
    </>
  );
};

export default LayoutsApp;
