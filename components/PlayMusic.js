"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
const PlayMusic = ({ imgSrc, artist, song }) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="container mx-auto grid grid-cols-3 gap-x-96 py-5">
      <div className="flex-start  flex ">
        <Image
          className="h-12 w-12 items-center rounded-md object-cover shadow-md"
          src={imgSrc}
          alt="music pic"
        />
        <div className="mx-8 pt-2">
          <p className="font-mono text-sm font-bold">{artist}</p>
          <p className="font-mono text-xs font-bold text-secondary-orange">
            {song}
          </p>
        </div>
      </div>
      <div className="mx-8 pt-2">
        <p className="">play pause</p>
      </div>
      <div
        className="mx-4 cursor-pointer pt-2"
        onClick={() => setIsLiked(!isLiked)}
      >
        {isLiked ? <BiHeart size={24} /> : <HiHeart fill="#EC7434" size={24} />}
      </div>
    </div>
  );
};

export default PlayMusic;
