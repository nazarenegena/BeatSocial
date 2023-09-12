"use client";
import Image from "next/image";
import { BiPlayCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { playSong } from "@/redux/features/songsSlice";
const Card = ({ title, artist, imgSrc, hasPlayBtn, tracks, index }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="
      
        hover:scale-115
        group
        relative
        mb-6
        flex
        cursor-pointer
        flex-col
        items-center
        justify-center
         pt-2
       shadow-md
        hover:font-medium  
            hover:text-secondary-orange
            hover:opacity-90
        
            hover:shadow-xl
        
        "
    >
      {hasPlayBtn ? (
        <div
          onClick={() => dispatch(playSong({ index, tracks }))}
          className="
            bg-red
            absolute
            flex
            items-center
            justify-center
            rounded-full
            p-4
            opacity-0
            drop-shadow-md
            transition
              duration-500 
              hover:scale-110
            group-hover:opacity-100
           
            "
        >
          <BiPlayCircle size={70} />
        </div>
      ) : null}

      <Image
        className=" 
            h-72 
            w-80
            items-center 
             rounded-md
             object-contain
            
            
            "
        src={imgSrc}
        width={200}
        height={200}
        alt="music pic"
      />
      <div className="my-2">
        <p className="font-mono font-semibold">{title}</p>
        <p className="font-serif font-medium">{artist}</p>
      </div>
    </div>
  );
};

export default Card;
