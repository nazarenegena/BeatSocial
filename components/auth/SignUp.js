"use client";
import Lottie from "lottie-react";
import spaceData from "@/public/images/lotties/spacestream.json";
const SignUp = () => {
  return (
    <div className="grid w-[80rem] grid-cols-2 rounded-lg  bg-gradient-to-l from-white to-orange-200 font-mono shadow-lg">
      <div className="mt-14 rounded-l-lg ">
        <Lottie animationData={spaceData} loop={true} />
      </div>
      <div className="flex w-full flex-col py-5 pl-32">
        <p className=" font-mono text-4xl font-bold text-secondary-orange">
          Sign Up
        </p>

        <form className="flex w-80 flex-col justify-center ">
          <label className="mt-9 text-lg font-semibold">What's your name</label>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            className="mt-6 h-12 w-full cursor-pointer rounded-md bg-dull-brown px-10 text-sm focus:outline-none"
          />
          <label className="mt-9 text-lg font-semibold">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="email@address.com"
            className="mt-6 h-12 w-full cursor-pointer rounded-md bg-dull-brown px-10 text-sm focus:outline-none"
          />
          <label className="mt-12 text-lg font-semibold">
            What's your gender
          </label>
          <div className="mt-10 flex items-center">
            <div className="mr-10 flex items-center">
              <input
                type="radio"
                id="male"
                name="gender"
                className=" text-bold peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-neutral-700 text-secondary-orange transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-dull-brown before:opacity-0 before:transition-opacity checked:border-secondary-orange checked:before:bg-secondary-orange hover:before:opacity-10"
              />
               {" "}
              <label
                for="male"
                className="text-lg transition-colors peer-checked:font-medium peer-checked:text-secondary-orange"
              >
                {" "}
                Male
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="female"
                name="gender"
                className="before:content[''] text-bold peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-neutral-700 text-secondary-orange transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-dull-brown before:opacity-0 before:transition-opacity checked:border-secondary-orange checked:before:bg-secondary-orange hover:before:opacity-10"
              />
               {" "}
              <label
                for="female"
                className="text-lg transition-colors peer-checked:font-medium peer-checked:text-secondary-orange"
              >
                {" "}
                Female
              </label>
            </div>
          </div>
            <label className="mt-7 text-lg font-semibold">Password</label>
          <input
            type="password"
            name="password"
            placeholder="enter password"
            className="mt-6 h-12 w-full cursor-pointer rounded-md bg-dull-brown px-10 text-sm focus:outline-none"
          />
          <button
            type="button"
            className=" mt-12 h-12 rounded-md border-2 border-black bg-black px-8 py-2 font-semibold  text-white shadow-md transition hover:border-secondary-orange hover:bg-secondary-orange hover:text-white"
          >
            {" "}
            confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
