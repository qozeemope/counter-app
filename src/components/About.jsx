import React from "react";
import { NavLink } from "react-router-dom";
// import Head from "react";

function About() {
  return (
    <main className="md:p-[50px] p-[20px] bg-[#00000020] h-screen">
      {/* <head>
        <title>About App</title>
      </head> */}
      <h1 className="font-bold  text-3xl text-center mb-[30px]">
        About product
      </h1>
      <p className="md:text-2xl text-center">
        This is version 1.0.0 of this app. Watch out for subsequent releases.
      </p>
      <p className="mt-[20px] text-center md:text-2xl">
        Click{" "}
        <NavLink
          to="/error"
          className={
            "text-blue-500 hover:text-blue-900 active:text-blue-700 focus:text-blue-400"
          }
        >
          here
        </NavLink>{" "}
        to test the error boundary
      </p>
    </main>
  );
}

export default About;
