"use client";

import Box from "./Box";
import Library from "./Library";
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
        <Box className="py-10 px-5">
          <div className="flex items-center text-dark-pink font-bold cursor-pointer">
            <TbBrandBeats size={50} strokeWidth={2} />
            <p>eatsocial</p>
          </div>
          <div className="flex
              items-center
               my-6
                 pl-2
              text-dark-pink
              cursor-pointer
              hover:bg-dark-pink 
              hover:text-white
              transition
              hover:rounded-md
            ">
            <HiHome className="mr-4 " size={16} />
            <p>Home</p>
          </div>

          <div className="
          flex
              items-center
               my-6
                 pl-2
              text-dark-pink
              cursor-pointer
              hover:bg-dark-pink 
              hover:text-white
              transition
              hover:rounded-md
            
          ">
            <BiSearch className="mr-4" size={16} strokeWidth={2} />
            <p>Browse</p>
          </div>
        </Box>

        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </div>
      <main>{children}</main>
      {/* bg-gradient-to-t from-white to-rose-100 justify-between */}
    </div>
  );
};

export default Navbar;
