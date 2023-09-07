"use client";
import Image from "next/image";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { playSong } from "@/redux/features/songsSlice";

const LyricSection = ({ lyricImg, title, label, tracks }) => {
  const dispatch = useDispatch();
  return (
    <div className="relative h-60 w-full rounded-lg lg:h-96 lg:max-w-full">
      <div className="absolute z-20  flex flex-col px-12">
        <p className=" mt-10 text-2xl font-bold text-zinc-700">{label ?? ""}</p>
        <p className="mt-8 text-5xl font-bold text-white">{title ?? ""}</p>
        <div className="mt-24 flex">
          <Button
            title="Play"
            onClick={() => dispatch(playSong({ index: 0, tracks }))}
            className={
              " text-bold w-36 rounded-full border-2 border-black bg-black px-8 py-2 font-medium text-black text-white transition hover:border-secondary-orange hover:bg-secondary-orange hover:text-white"
            }
          />

          <Button
            title="Follow"
            className={
              " text-bold ml-5 w-36 rounded-full border-2 border-black px-8 py-2 font-medium text-black transition hover:border-secondary-orange hover:bg-secondary-orange hover:text-white"
            }
          />
        </div>
      </div>

      <div className="absolute inset-0 w-full">
        <Image
          src={lyricImg}
          alt="background"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="relative z-10 h-full  justify-center rounded-lg bg-secondary-orange opacity-40 "></div>
    </div>
  );
};

export default LyricSection;
