"use client";
import React, { useState } from "react";
import { BiPlay, BiPause } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { playSong, selectCurrentSong } from "@/redux/features/songsSlice";
import { formatDuration } from "@/utils/formatters";

const TrackLineUpSection = ({ tracks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const currentSong = useSelector(selectCurrentSong);

  const [likedTracks, setLikedTracks] = useState(tracks.map(() => false));
  const handleLikeClick = (index) => {
    const newLikedTracks = [...likedTracks];
    newLikedTracks[index] = !newLikedTracks[index];
    setLikedTracks(newLikedTracks);
  };
  console.log(currentSong);
  return (
    <>
      <table className="relative h-full w-full table-fixed overflow-hidden py-12 font-mono">
        <tbody className="w-full">
          {tracks.map((track, index) => {
            return (
              <>
                <tr
                  key={track.id}
                  className={`my-10 flex cursor-pointer items-center border-x  border-neutral-200 from-white to-orange-200 px-12 shadow-md hover:rounded-sm hover:bg-gradient-to-l hover:shadow-lg hover:transition ${
                    currentSong?.id === track?.id ? "bg-gradient-to-l" : ""
                  } `}
                >
                  <td
                    className="group w-1/4 py-5"
                    onClick={() => dispatch(playSong({ index, tracks }))}
                  >
                    {currentSong?.id === track?.id ? (
                      <BiPause
                        size={28}
                        className="fill-secondary-orange"
                        stroke="currentColor"
                      />
                    ) : (
                      <BiPlay
                        size={28}
                        className="group-hover:fill-secondary-orange"
                        stroke="currentColor"
                      />
                    )}
                  </td>

                  <td className="w-1/4 py-5 font-semibold text-neutral-700">
                    {track.artist?.name}
                  </td>
                  <td className="mx-16 w-1/4 py-5 font-semibold text-neutral-700 ">
                    {track.title}
                  </td>
                  <td className="w-1/4 py-5 font-semibold text-neutral-500 ">
                    {formatDuration(track.duration)}
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
    </>
  );
};

export default TrackLineUpSection;
