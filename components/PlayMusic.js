"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
import useWavesurfer from "@/hooks/useWavelength";
import { formatDuration } from "../utils/formatters";
import VolumeSlider from "./VolumeSlider";
import { useDispatch, useSelector } from "react-redux";
import {
  MdSkipPrevious,
  MdSkipNext,
  MdPlayCircleFilled,
  MdPauseCircleFilled,
  MdVolumeUp,
  MdVolumeMute,
} from "react-icons/md";
import {
  playNextSong,
  playPreviousSong,
  selectCurrentSong,
} from "@/redux/features/songsSlice";

const PlayMusic = () => {
  const dispatch = useDispatch();
  const waveContainerRef = useRef(null);
  const {
    album,
    title,
    artist,
    preview: audioSrc,
    duration,
  } = useSelector(selectCurrentSong);
  const { handlePlayPause, isPlaying, setAudioVolume, audioVolume } =
    useWavesurfer(waveContainerRef, audioSrc, () => dispatch(playNextSong()));
  const formattedDuration = formatDuration(duration);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="mt-5 flex px-10 ">
      <div className=" flex items-center justify-evenly">
        <Image
          className="h-12 w-12 items-center rounded-md object-cover shadow-md"
          src={album?.cover_big}
          alt="pic"
          width={50}
          height={50}
        />
        <div className="mx-4 pt-2">
          <p className="font-mono text-sm font-bold">{title}</p>
          <p className="font-mono text-xs font-bold text-secondary-orange">
            {artist?.name}
          </p>
        </div>
        <div
          className="  ml-4 cursor-pointer"
          onClick={() => setIsLiked(!isLiked)}
        >
          {!isLiked ? (
            <BiHeart size={20} fill="#EC7434" />
          ) : (
            <HiHeart fill="#EC7434" size={20} />
          )}
        </div>
      </div>

      <div className=" mx-12 flex cursor-pointer">
        <button onClick={() => dispatch(playPreviousSong())}>
          <MdSkipPrevious size={36} fill="#EC7434" />
        </button>
        <button onClick={audioSrc && handlePlayPause}>
          {isPlaying ? (
            <MdPauseCircleFilled size={36} fill="#EC7434" />
          ) : (
            <MdPlayCircleFilled size={36} fill="#EC7434" />
          )}
        </button>
        <button onClick={() => dispatch(playNextSong())}>
          <MdSkipNext size={36} fill="#EC7434" />
        </button>
      </div>
      <div className="flex w-fit items-center">
        <div className="h-full w-[65rem] " ref={waveContainerRef}></div>
        <p className=" mx-10">{formattedDuration}</p>{" "}
        <div className="mt-1">
          <button
            onClick={() =>
              setAudioVolume((prev) => ({
                ...prev,
                isMuted: prev.value <= 0 ? true : !prev.isMuted,
              }))
            }
          >
            {audioVolume.isMuted ? (
              <MdVolumeMute fill="#EC7434" size={24} />
            ) : (
              <MdVolumeUp fill="#EC7434" size={24} />
            )}
          </button>
          {audioSrc && (
            <VolumeSlider
              className="bg-red-400"
              audioVolume={audioVolume}
              onChange={([value]) => {
                setAudioVolume({ isMuted: value <= 0 ? true : false, value });
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayMusic;
