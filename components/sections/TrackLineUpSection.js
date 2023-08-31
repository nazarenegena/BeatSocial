"use client";
import React, { useState } from "react";
import PlayTrackSection from "./PlayTrackSection";
import { BiPlay } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";

const tracks = [{ title: "", artist: "", id: 1, duration: "", liked: false }];

const TrackLineUpSection = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <>
      <table className="h-full w-full table-fixed overflow-hidden py-12">
        <tbody className="w-full">
          <tr className="my-10 flex cursor-pointer items-center border-x  border-neutral-200 from-white to-orange-200 px-12 shadow-md hover:rounded-sm hover:bg-gradient-to-l hover:shadow-lg hover:transition">
            <td className="w-1/4 py-5">
              <BiPlay size={24} />
            </td>
            <td className="w-1/4 py-5">{"artist"}</td>
            <td className="w-1/4 py-5">{"songTitle"}</td>
            <td className="w-1/4 py-5">{"songDuration"}</td>
            <td className="w-1/4 py-5">
              {isLiked ? (
                <HiHeart fill="#EC7434" size={24} />
              ) : (
                <BiHeart fill="#EC7434" size={24} />
              )}
            </td>
          </tr>
          <tr className="my-10 flex cursor-pointer items-center border-x  border-neutral-200 from-white to-orange-200 px-12 shadow-md hover:rounded-sm hover:bg-gradient-to-l hover:shadow-lg hover:transition">
            <td className="w-1/4 py-5">
              <BiPlay size={24} />
            </td>
            <td className="w-1/4 py-5">{"artist"}</td>
            <td className="w-1/4 py-5">{"songTitle"}</td>
            <td className="w-1/4 py-5">{"songDuration"}</td>
            <td className="w-1/4 py-5">
              {isLiked ? (
                <HiHeart fill="#EC7434" size={24} />
              ) : (
                <BiHeart fill="#EC7434" size={24} />
              )}
            </td>
          </tr>
          <tr className="my-10 flex cursor-pointer items-center border-x  border-neutral-200 from-white to-orange-200 px-12 shadow-md hover:rounded-sm hover:bg-gradient-to-l hover:shadow-lg hover:transition">
            <td className="w-1/4 py-5">
              <BiPlay size={24} />
            </td>
            <td className="w-1/4 py-5">{"artist"}</td>
            <td className="w-1/4 py-5">{"songTitle"}</td>
            <td className="w-1/4 py-5">{"songDuration"}</td>
            <td className="w-1/4 py-5">
              {isLiked ? (
                <HiHeart fill="#EC7434" size={24} />
              ) : (
                <BiHeart fill="#EC7434" size={24} />
              )}
            </td>
          </tr>
          <tr className="my-10 flex cursor-pointer items-center border-x  border-neutral-200 from-white to-orange-200 px-12 shadow-md hover:rounded-sm hover:bg-gradient-to-l hover:shadow-lg hover:transition">
            <td className="w-1/4 py-5">
              <BiPlay size={24} />
            </td>
            <td className="w-1/4 py-5">{"artist"}</td>
            <td className="w-1/4 py-5">{"songTitle"}</td>
            <td className="w-1/4 py-5">{"songDuration"}</td>
            <td className="w-1/4 py-5">
              {isLiked ? (
                <HiHeart fill="#EC7434" size={24} />
              ) : (
                <BiHeart fill="#EC7434" size={24} />
              )}
            </td>
          </tr>
          <tr className="my-10 flex cursor-pointer items-center border-x  border-neutral-200 from-white to-orange-200 px-12 shadow-md hover:rounded-sm hover:bg-gradient-to-l hover:shadow-lg hover:transition">
            <td className="w-1/4 py-5">
              <BiPlay size={24} />
            </td>
            <td className="w-1/4 py-5">{"artist"}</td>
            <td className="w-1/4 py-5">{"songTitle"}</td>
            <td className="w-1/4 py-5">{"songDuration"}</td>
            <td className="w-1/4 py-5">
              {isLiked ? (
                <HiHeart fill="#EC7434" size={24} />
              ) : (
                <BiHeart fill="#EC7434" size={24} />
              )}
            </td>
          </tr>
        </tbody>
      </table>

      <PlayTrackSection />
    </>
  );
};

export default TrackLineUpSection;
