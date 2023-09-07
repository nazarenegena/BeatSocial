"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Box from "../Box";
import earphone from "../../public/images/earphone.jpeg";
import Library from "../Library";
import Link from "next/link";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { TbBrandBeats } from "react-icons/tb";
import SearchModal from "@/components/Modal";
import Search from "../Search";
import PlayMusic from "../PlayMusic";

const Navbar = ({ children }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-full ">
      <div
        className="hidden
            h-full
            w-[300px]
            flex-col
            gap-y-2
            bg-white
            p-2 md:flex"
      >
        <Box className="px-5 py-5">
          <Link
            className="flex cursor-pointer items-center font-semibold text-secondary-orange"
            href="/"
          >
            <TbBrandBeats size={50} strokeWidth={2} />
            <p>beatsocial</p>
          </Link>
          <Link
            href="/dashboard"
            className={`my-10 flex cursor-pointer items-center pl-2 transition hover:rounded-md hover:font-medium hover:text-secondary-orange hover:shadow-md ${
              pathname === "/dashboard"
                ? "active text-secondary-orange"
                : "text-black"
            }`}
          >
            <HiHome className="mr-4" size={16} />
            <p>Home</p>
          </Link>

          <button
            className="
            hover:
          mb-8
              flex
               w-60
                 cursor-pointer
              items-center
              pl-2
              transition
              hover:rounded-md
              hover:font-medium
              hover:text-secondary-orange
                            hover:shadow-md

            
          "
            onClick={() => setIsOpen(!isOpen)}
          >
            <BiSearch className="mr-4" size={16} strokeWidth={2} />
            <p>Browse</p>
          </button>
        </Box>

        <Box className="h-full overflow-y-auto shadow-md">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">
        {children}
        <SearchModal openModal={() => setIsOpen(!isOpen)} isOpen={isOpen}>
          <Search />
        </SearchModal>
      </main>
      <div className="absolute bottom-0 h-24 w-[120rem] rounded-full border border-neutral-100 bg-white drop-shadow-lg">
        {/* <PlayMusic
          imgSrc={earphone}
          playingArtist={"Hollow Cloves"}
          playingSong={"These Memories"}
        /> */}
        <PlayMusic />
      </div>
      {/* bg-gradient-to-t from-white to-rose-100 justify-between */}
    </div>
  );
};

export default Navbar;
