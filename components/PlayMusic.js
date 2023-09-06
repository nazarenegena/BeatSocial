"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
import useWavesurfer from "@/hooks/useWavelength";
import { formatDuration } from "@/utils/formatters";
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
    <div className="container mx-auto grid grid-cols-6 gap-x-40 py-5">
      <div className=" flex">
        <Image
          className="h-12 w-12 items-center rounded-md object-cover shadow-md"
          src={album}
          alt="music pic"
        />
        <div className="mx-8 pt-2">
          <p className="font-mono text-sm font-bold">{title}</p>
          <p className="font-mono text-xs font-bold text-secondary-orange">
            {artist?.name}
          </p>
        </div>
      </div>
      <div className="mx-8 flex cursor-pointer  p-10 pt-2">
        <button onClick={() => dispatch(playPreviousSong())}>
          <MdSkipPrevious size={40} fill="#EC7434" />
        </button>
        <button onClick={audioSrc && handlePlayPause}>
          {isPlaying ? (
            <MdPauseCircleFilled size={40} fill="#EC7434" />
          ) : (
            <MdPlayCircleFilled size={40} fill="#EC7434" />
          )}
        </button>
        <button onClick={() => dispatch(playNextSong())}>
          <MdSkipNext size={40} fill="#EC7434" />
        </button>
      </div>
      <div className="relative h-full w-[300px]" ref={waveContainerRef}></div>
      <span>{duration}</span>
      <div
        className="mx-24 cursor-pointer pt-2"
        onClick={() => setIsLiked(!isLiked)}
      >
        {!isLiked ? (
          <BiHeart size={24} fill="#EC7434" />
        ) : (
          <HiHeart fill="#EC7434" size={24} />
        )}
      </div>
      <div>
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
  );
};

export default PlayMusic;
