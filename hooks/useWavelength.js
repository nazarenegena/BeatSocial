"use client";
import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

const options = {
  //   progressColor: "#EC7434",
  //   waveColor: "black",
  //   fillParent: true,
  //   responsive: true,
  //   autoplay: true,
  //   cursorWidth: 0,
  //   barHeight: 0.5,
  //   barGap: 3,

  container: "#waveform",
  waveColor: "red",
  progressColor: "blue",
};

const useWavesurfer = (waveContainerRef, audioSrc, onFinish) => {
  const waveSurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioVolume, setAudioVolume] = useState({ isMuted: false, value: 1 });

  useEffect(() => {
    waveSurferRef.current = WaveSurfer.create({
      ...options,
      url: audioSrc,
      container: waveContainerRef.current,
      height: waveContainerRef.current.clientHeight,
    });

    waveSurferRef.current.on("play", () => setIsPlaying(true));
    waveSurferRef.current.on("pause", () => setIsPlaying(false));
    waveSurferRef.current.on("finish", () => onFinish());

    waveSurferRef.current.setVolume(
      audioVolume.isMuted ? 0 : audioVolume.value,
    );

    return () => {
      waveSurferRef.current.destroy();
    };
  }, [audioSrc]);

  waveSurferRef?.current?.setVolume(
    audioVolume.isMuted ? 0 : audioVolume.value,
  );

  return {
    handlePlayPause: () => waveSurferRef?.current?.playPause(),
    audioVolume,
    setAudioVolume,
    isPlaying,
  };
};

export default useWavesurfer;
