"use client";

import Box from "./Box";
import Library from "./Library";
import Link from 'next/link'
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { TbBrandBeats } from "react-icons/tb";

const Navbar = ({ children }) => {
  return (
    <div
      className="flex h-full
        "
    >
      <div
        className="hidden
            md:flex
            flex-col
            gap-y-2
            h-full
            w-[300px]
            p-2
            bg-white"
      >
        <Box className="py-5 px-5">
          <div className="flex items-center text-secondary-orange font-semibold cursor-pointer">
            <TbBrandBeats size={50} strokeWidth={2} />
            <p>eatsocial</p>
          </div>
          <Link className="flex
              items-center
               my-6
                 pl-2
              cursor-pointer
              hover:shadow-md
              hover:text-secondary-orange
              transition
              hover:font-medium
              hover:rounded-md
            "
          href="/"
          >

            <HiHome className="mr-4 " size={16} />
            <p>Home</p>
          </Link>

          <div className="
          flex
              items-center
               my-6
                 pl-2
              cursor-pointer
              hover:shadow-md
              hover:text-secondary-orange
              hover:
              transition
              hover:rounded-md
                            hover:font-medium

            
          ">
            <BiSearch className="mr-4" size={16} strokeWidth={2} />
            <p>Browse</p>
          </div>
        </Box>

        <Box className="overflow-y-auto h-full shadow-md">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">
        {children}
      </main>
      {/* bg-gradient-to-t from-white to-rose-100 justify-between */}
    </div>
  );
};

export default Navbar;
