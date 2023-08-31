"use client";
import React, { useState } from "react";
import { BiPlay } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";

const Track = ({ songTitle, songDuration, artist }) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <tr className="flex items-center">
      <td className="w-1/4 py-5">
        <BiPlay size={24} />
      </td>
      <td className="w-1/4 py-5">{artist}</td>
      <td className="w-1/4 py-5">{songTitle}</td>
      <td className="w-1/4 py-5">{songDuration}</td>
      <td className="w-1/4 py-5">
        {isLiked ? (
          <HiHeart fill="#EC7434" size={24} />
        ) : (
          <BiHeart fill="#EC7434" size={24} />
        )}
      </td>
    </tr>
  );
};

export default Track;
