"use client";
import Lottie from "lottie-react";
import caset from "@/public/images/lotties/caset.json";
const SignIn = () => {
  return (
    <div className="grid w-[80rem] grid-cols-2 rounded-lg  bg-gradient-to-l from-white to-orange-200 font-mono shadow-lg">
      <div className="rounded-l-lg ">
        <Lottie animationData={caset} loop={true} />
      </div>
      <div className="flex w-full flex-col py-10 pl-32">
        <p className=" font-mono text-4xl font-bold text-secondary-orange">
          Sign In
        </p>

        <form className="flex w-80 flex-col justify-center ">
          <label className="mt-12 text-lg font-semibold">Your name</label>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            className="mt-6 h-12 w-full cursor-pointer rounded-md bg-dull-brown px-10 text-sm focus:outline-none"
          />
          <label className="mt-12 text-lg font-semibold">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="email@address.com"
            className="mt-6 h-12 w-full cursor-pointer rounded-md bg-dull-brown px-10 text-sm focus:outline-none"
          />

          <label className="mt-12 text-lg font-semibold">Password</label>
          <input
            type="password"
            name="password"
            placeholder="enter password"
            className="mt-6 h-12 w-full cursor-pointer rounded-md bg-dull-brown px-10 text-sm focus:outline-none"
          />
          <button
            type="button"
            className=" mt-14 h-12 rounded-md border-2 border-black bg-black px-8 py-2 font-semibold  text-white shadow-md transition hover:border-secondary-orange hover:bg-secondary-orange hover:text-white"
          >
            {" "}
            Welcome
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
