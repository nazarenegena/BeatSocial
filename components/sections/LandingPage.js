"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import floatBg from "../../public/images/floatHeadPhones.jpeg";
import dashboardSection from "../../public/images/dashboardSection.png";
import playSection from "../../public/images/playsection.png";
import browseSection from "../../public/images/browsesection.png";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import Button from "../Button";
import { TbBrandBeats } from "react-icons/tb";
import Modal from "../Modal";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";

const LandingPage = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSignUp = () => {
    setIsSignUpOpen(!isSignUpOpen);
  };

  const handleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <div className="h-full w-full">
      <div>
        <div className="sticky top-0 z-40 flex justify-between bg-white px-8 py-4 font-mono shadow-lg  ">
          {/* Navbar section */}
          <div className="flex items-center font-semibold text-secondary-orange ">
            <TbBrandBeats size={50} strokeWidth={2} />
            <p>beatsocial</p>
          </div>

          <div className=" ml-40 flex items-center font-mono">
            <p className="mx-10 cursor-pointer border-secondary-orange p-2 transition hover:border-b hover:font-medium hover:text-secondary-orange">
              <a href="#about">About</a>
            </p>
            <p className=" cursor-pointer border-secondary-orange p-2 transition hover:border-b hover:font-medium hover:text-secondary-orange ">
              <a href="#features">Features</a>
            </p>{" "}
            <Link
              href={"https://github.com/nazarenegena/BeatSocial"}
              target="_blank"
            >
              <p className=" mx-10 cursor-pointer border-secondary-orange p-2 transition hover:border-b hover:font-medium hover:text-secondary-orange ">
                Repository
              </p>
            </Link>
          </div>

          <div>
            <Button
              className={
                " text-bold w-30 mr-10 rounded-md border-2 border-black px-8 py-2 font-medium text-black transition hover:border-secondary-orange hover:bg-secondary-orange hover:text-white "
              }
              title={"sign in"}
              onClick={handleLogin}
            />
            <Button
              className={
                " w-30 mr-8 rounded-md border-2 border-black bg-black px-8 py-2 font-medium text-white transition hover:border-secondary-orange hover:bg-secondary-orange hover:text-white "
              }
              title={"sign Up"}
              onClick={handleSignUp}
            />
          </div>
        </div>

        {/* content section */}
        <div className=" h-full w-full">
          {/* hero section */}
          <div className="absolute left-[42rem] top-80 z-20">
            <p className="font-mono text-7xl font-bold text-white shadow-black drop-shadow-2xl ">
              Feel The Beat
            </p>
            <p className="pt-6 font-mono text-xl font-semibold shadow-black drop-shadow-2xl ">
              music for you ...
            </p>
          </div>
          <div className="absolute inset-0 shadow-inner">
            <Image
              src={floatBg}
              alt="beatsocial_app"
              className=" h-[43rem] max-w-full object-cover "
            />
          </div>

          <div className="relative z-10 h-[38rem]  bg-secondary-orange opacity-20 "></div>

          {/* features section */}
          <div className="h-auto bg-white pb-24 pt-12" id="features">
            <div className=" mx-40  mb-32 mt-10 flex items-center">
              <Image
                src={playSection}
                alt="beatsocial_app"
                className="mx-12 h-96 w-1/2 rounded-lg object-contain shadow-2xl"
              />
              <div className="ml-48">
                <p className="mb-8 text-4xl font-light">
                  Listen to your music.
                </p>
                <p className="text-lg font-medium tracking-wide text-zinc-700 ">
                  Get to relax whilst listening to your choice of music. <br />
                  Scroll to discover related tracks that you can listen to as
                  well <br />{" "}
                </p>
              </div>
            </div>

            <div className=" mx-40  my-20 flex items-center">
              <div className="ml-20">
                <p className="mb-8 text-4xl font-light">
                  Keep Up with your Music.
                </p>
                <p className="text-lg font-medium tracking-wide text-zinc-700">
                  How convinient would it be to Curate your desired playlist.{" "}
                  <br />
                  Our dashboard gives you the chance to choose and section{" "}
                  <br />
                  your preferences. <br /> from playlists to albums to artist{" "}
                </p>
              </div>
              <Image
                src={dashboardSection}
                alt="beatsocial_app"
                className="ml-56 h-96 w-1/2 rounded-lg object-contain shadow-2xl"
              />
            </div>

            <div className=" mx-40  mb-32 mt-32 flex items-center rounded-lg">
              <Image
                src={browseSection}
                alt="beatsocial_app"
                className="mx-12 h-96 w-1/2 rounded-lg object-contain shadow-2xl"
              />
              <div className="ml-48">
                <p className="mb-8 text-4xl font-light">
                  Find what you want to listen to
                </p>
                <div className="text-lg font-medium tracking-wide text-zinc-700 ">
                  Seamlessly browse for your desired choice of music, album,
                  artist and even playlist
                  <br />
                  Search results are as quick as you hit enter. <br />
                  <div className="mt-12 flex h-12 w-44 cursor-pointer items-center justify-center rounded-lg border-2 border-secondary-orange bg-secondary-orange  px-4 py-3 font-mono font-medium text-white transition hover:shadow-lg ">
                    <Link href="/dashboard">
                      <p>Get Started</p>
                    </Link>

                    {/* open the sidebar */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About section */}

          <div className="mb-32" id="about">
            <div className=" flex h-full ">
              <div className="mx-32 rounded-md bg-gradient-to-t from-white to-orange-200 p-7 shadow-lg">
                <p className="py-10 text-xl font-medium">Our Inspiration</p>

                <p className="text-lg leading-10">
                  As avid music lovers, We drew inspiration from the
                  revolutionized music experience we have had with various apps
                  such as Spotify. Our inspiration for this project came from
                  our admiration for Spotify's user experience and curiosity
                  about how such a platform is built. We wanted to challenge
                  ourselves by creating an inspiration and interpretation of
                  this iconic music streaming service. By doing so, We aimed to
                  deepen our knowledge of web development, front-end design, and
                  back-end functionality. Additionally, this project serves as a
                  vital component of our portfolio. It's a testament to our
                  commitment to lifelong learning and dedication to delivering
                  polished, user-centric web applications.
                </p>
              </div>
              <div className="mx-32 rounded-md bg-gradient-to-t from-white to-orange-200 p-7 shadow-lg">
                <p className="py-10 text-xl font-medium">About</p>

                <p className="text-lg leading-10">
                  Welcome to Beatsocial, a music app born out of our deep
                  appreciation for music, fascination with cutting-edge
                  technology, and desire to showcase our skills as developers.
                  Beatsocial is not a streaming service, but a social platform.
                  We provide a gateway to a world of melodies, rhythms, and
                  emotions. Beatsocial's intends on providing a user-friendly
                  interface, personalized playlists, as well as an extensive
                  music library. Beatsocial is not only a music streaming
                  service but a social platform. We hope you enjoy exploring
                  this project as much as we enjoyed creating it. Feel free to
                  browse through the features, test the functionality, and get a
                  taste of what we can bring to the world of web development.
                  Thank you for visiting Beatsocial, and look forward to sharing
                  more of our journey with you.
                </p>
              </div>
            </div>
          </div>

          {/* contact section */}
          <div className="flex flex-col items-center justify-center pb-6">
            <p className="text-lg font-semibold text-black">Meet the Team</p>
            <div className="mt-8 flex items-center justify-center">
              <div className="mx-10 flex items-center px-40 py-6 shadow-md">
                <p className="font-semibold">Nazarene Wanyaga</p>
                <div className="mx-10">
                  <Link
                    href={"https://github.com/nazarenegena"}
                    target="_blank"
                  >
                    <p className="my-5 flex cursor-pointer items-center font-semibold text-secondary-orange">
                      <BsGithub className="mx-3" size={20} fill="#EC7434" />
                      Github
                    </p>
                  </Link>

                  <Link
                    href={
                      "https://www.linkedin.com/in/nazarene-wanyaga-426058180/"
                    }
                    target="_blank"
                  >
                    <p className="flex cursor-pointer items-center font-semibold text-secondary-orange">
                      <BsLinkedin className="mx-3" size={20} fill="#EC7434" />
                      Linked in
                    </p>
                  </Link>
                </div>
              </div>
              <div className="mx-10 flex items-center px-40 py-6 shadow-md">
                <p className="font-semibold">Joe Wainaina</p>
                <div className="mx-10">
                  <Link href={"https://github.com/iamjoee"} target="_blank">
                    <p className="my-5 flex cursor-pointer items-center font-semibold text-secondary-orange">
                      <BsGithub className="mx-3" size={20} fill="#EC7434" />
                      Github
                    </p>
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/in/joe-dev-ops"}
                    target="_blank"
                  >
                    <p className="flex cursor-pointer items-center font-semibold text-secondary-orange">
                      <BsLinkedin className="mx-3" size={20} fill="#EC7434" />
                      Linked in
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* the authentication modal */}
            <Modal
              openModal={() => setIsSignUpOpen(!isSignUpOpen)}
              isOpen={isSignUpOpen}
            >
              <SignUp />
            </Modal>
            <Modal
              openModal={() => setIsLoginOpen(!isLoginOpen)}
              isOpen={isLoginOpen}
            >
              <SignIn />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
