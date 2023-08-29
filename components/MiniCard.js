import Image from "next/image";
import { BiPlayCircle } from "react-icons/bi";
const MiniCard = ({ title, artist, imgSrc }) => {
  return (
    <div
      className="
        cursor-pointer
        flex
        flex-col
        mb-6
        shadow-md
        items-center
        justify-center
         relative
       group
        hover:opacity-90  
            hover:text-secondary-orange
            hover:font-medium
            hover:scale-115
        
        "
    >
      <div
        className="
            absolute
            transition
            opacity-0
            rounded-full
            flex
            items-center
            justify-center
            drop-shadow-md
            group-hover:opacity-100
           w-full
            "
      >
        <BiPlayCircle size={70} />
      </div>

      <Image
        className=" 
        w-full
            h-48
            object-cover 
            rounded-md
             items-center
            
            
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

export default MiniCard;
