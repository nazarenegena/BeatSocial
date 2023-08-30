"use client"
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
    const [value, setValue] = useState("What do you want to listen to ?")
  const searchHandler = (event) => {
     setValue(event.target.value);
     console.log(value)
  };
  return (
    <div className="relative w-full rounded-full text-gray-600 shadow-lg hover:text-secondary-orange font-bold">
      <input
        type="text"
        name="search"
        placeholder={value}
        className="h-12 w-full cursor-pointer rounded-full bg-white px-10 pr-10 text-sm focus:outline-none"
        onChange={searchHandler}
      />
      <button type="submit" className="absolute right-4 top-0 mr-4 mt-3">
        <BiSearch
          className="hover:text-secondary-orange"
          size={22}
          strokeWidth={1}
        />
      </button>
    </div>
  );
};

export default Search;
