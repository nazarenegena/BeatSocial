import Link from "next/link";
import Image from "next/image";
import { BiPlayCircle } from "react-icons/bi";
const MiniCard = ({ title, artist, imgSrc }) => {
  return (
    <Link href="/music">
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
        shadow-md  
            hover:font-medium
            hover:text-secondary-orange
            hover:opacity-90
        
        "
      >
        <div
          className="
            absolute
            flex
            w-full
            items-center
            justify-center
            rounded-full
            opacity-0
            drop-shadow-md
            transition
           group-hover:opacity-100
            "
        >
          <BiPlayCircle size={70} />
        </div>

        <Image
          className=" 
        h-48
            w-full
            items-center 
            rounded-md
             object-cover
            
            
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
    </Link>
  );
};

export default MiniCard;
