import React from "react";

function Home() {
  return (
    <div className="md:p-[50px] p-[20px] bg-[#00000020] h-screen">
      <p className="font-bold  text-3xl text-center mb-[30px]">
        Welcome to Counter App
      </p>
      <p className="md:text-2xl text-center">
        This simple increases the value of the input by 1 when the plus sign is
        clicked and decreases the value by when the minus sign is clicked. You
        can also enter any number digit(s) you like so far it is in the range of
        positive integers.
      </p>
    </div>
  );
}

export default Home;
