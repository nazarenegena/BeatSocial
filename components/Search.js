"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import useSWR from "swr";
import { playSong } from "@/redux/features/songsSlice";

const SearchResultItem = ({ type, result }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id, name, title, picture_medium, md5_image } = result;

  return (
    <li
      className="flex items-center px-3 py-2 hover:bg-gradient-to-l"
      onClick={
        type === "track"
          ? () => dispatch(playSong({ tracks: [result], index: 0 }))
          : () => router.push(`/${type === "album" ? "albums" : type}/${id}`)
      }
    >
      <img
        className="h-10 w-10 rounded-md"
        src={
          picture_medium ||
          `https://e-cdns-images.dzcdn.net/images/artist/${md5_image}/1000x1000-000000-80-0-0.jpg`
        }
        alt={title || name}
      />
      <p className="ml-3">{name || title}</p>
    </li>
  );
};

const Search = () => {
  const [value, setValue] = useState("");

  const {
    data: resultsObj = {},
    error,
    isLoading,
  } = useSWR(value, async () => {
    const response = await fetch(`/api/search?q=${value}`);
    return await response.json();
  });
  const searchHandler = (event) => {
    setValue(event.target.value);
  };

  console.log(resultsObj, "results");
  return (
    <div className="relative w-[600px] rounded-full font-bold text-gray-600  shadow-lg">
      <input
        type="text"
        name="search"
        value={value}
        placeholder={"What do you want to listen to ?"}
        className="h-12 w-full cursor-pointer rounded-md bg-white px-10 pr-10 text-sm focus:outline-none"
        onChange={searchHandler}
      />
      <button
        type="submit"
        className="absolute right-4 top-0 mr-4 mt-3 hover:text-secondary-orange"
      >
        <BiSearch
          className="hover:text-secondary-orange"
          size={22}
          strokeWidth={1}
        />
      </button>
      <div className="mt-2 max-h-[32rem] overflow-auto rounded-md bg-white p-3">
        <p>Search results</p>
        {isLoading && <strong>Loading...</strong>}
        {Object.keys(resultsObj).map((type) => {
          return (
            <div key={type}>
              <strong className="text-orange-600">{type + "s"}</strong>

              <ul>
                {!resultsObj[type].length ? (
                  <span className="not-found-error">
                    Item not found. Please try a different search term.
                  </span>
                ) : (
                  resultsObj[type].map((result) => (
                    <SearchResultItem
                      key={result.id}
                      type={type}
                      result={result}
                    />
                  ))
                )}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
