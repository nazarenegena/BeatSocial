"use client";
import React, { useState } from "react";
import { BiPlay } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
import SearchModal from "../Modal";
import PlayMusic from "../PlayMusic";
import Box from "../Box";

const tracks = [
  { title: "Rain", artist: "Rihanna", id: 1, duration: "2.43", liked: false },
  {
    title: "Numb",
    artist: "Linkin Park",
    id: 2,
    duration: "1.36",
    liked: false,
  },
  { title: "Summer", artist: "Adele", id: 3, duration: "4.43", liked: false },
  { title: "Sugar", artist: "Maroon 5", id: 4, duration: "3.43", liked: false },
  {
    title: "Uptown",
    artist: "Bruno Mars",
    id: 5,
    duration: "1.43",
    liked: false,
  },
  { title: "Peace", artist: "Rachel", id: 6, duration: "2.43", liked: false },
  { title: "NewYork", artist: "Jay Z", id: 7, duration: "2.43", liked: false },
  {
    title: "Single Ladies",
    artist: "Beyonce",
    id: 8,
    duration: "2.43",
    liked: false,
  },
  { title: "Home", artist: "Allyah", id: 9, duration: "2.43", liked: false },
  { title: "Lost", artist: "Lisa", id: 10, duration: "2.43", liked: false },
];

const TrackLineUpSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [likedTracks, setLikedTracks] = useState(tracks.map(() => false));
  const handleLikeClick = (index) => {
    const newLikedTracks = [...likedTracks];
    newLikedTracks[index] = !newLikedTracks[index];
    setLikedTracks(newLikedTracks);
  };

  return (
    <>
      <table className="relative h-full w-full table-fixed overflow-hidden py-12 font-mono">
        <tbody className="w-full">
          {tracks.map((track, index) => {
            return (
              <>
                <tr
                  key={track.id}
                  className="my-10 flex cursor-pointer items-center border-x  border-neutral-200 from-white to-orange-200 px-12 shadow-md hover:rounded-sm hover:bg-gradient-to-l hover:shadow-lg hover:transition"
                >
                  <td
                    className="group w-1/4 py-5"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <BiPlay
                      size={28}
                      className="group-hover:fill-secondary-orange"
                      stroke="currentColor"
                    />
                  </td>

                  <td className="w-1/4 py-5 font-semibold text-neutral-700">
                    {track.artist}
                  </td>
                  <td className="w-1/4 py-5 font-semibold text-neutral-700">
                    {track.title}
                  </td>
                  <td className="w-1/4 py-5 font-semibold text-neutral-500 ">
                    {track.duration}
                  </td>
                  <td
                    className="w-1/4 py-5"
                    key={track.id}
                    onClick={() => handleLikeClick(index)}
                  >
                    {likedTracks[index] ? (
                      <HiHeart fill="#EC7434" size={24} />
                    ) : (
                      <BiHeart fill="#EC7434" size={24} />
                    )}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      {/* <div className="absolute bottom-2 mr-80 flex h-20 w-2/5  items-center justify-center rounded-full bg-secondary-orange opacity-90 shadow-md">
        <PlayMusic />
      </div> */}
    </>
  );
};

export default TrackLineUpSection;
