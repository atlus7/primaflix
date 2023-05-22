"use client";

import React, { useEffect, useState } from "react";

const Toaster = () => {
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOffline(true);
    });
    window.addEventListener("online", () => {
      setOffline(false);
    });
  });

  return (
    <>
      <div
        className={`flex transition-[transform] ${
          offline ? "translate-y-[30px]" : "translate-y-[-40px]"
        } text-sm fixed w-[500px] rounded-lg justify-between z-10 py-[6px] px-[15px] items-center bg-red-400 mx-0 my-auto h-[40px] left-[50%] translate-x-[-50%]`}
      >
        Please check your internet connection
        <button
          onClick={() => {
            setOffline(false);
          }}
        >
          OK
        </button>
      </div>
    </>
  );
};

export default Toaster;
