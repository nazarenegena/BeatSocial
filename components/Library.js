"use client";
import { TbPlaylist } from "react-icons/tb";
import { BsMusicNote } from "react-icons/bs";
import { IoMdAlbums, IoMdMicrophone } from "react-icons/io";

const Library = () => {
  const onClick = () => {
    // handle upload later
  };
  return (
    <div className="flex flex-col">
      <div
        className="
                flex
                flex-col
                px-5
                pt-4
                "
      >
        <div className="py-10">
          <p
            className="
                        text-dark-pink
                        font-semibold
                        text-md
                        mb-5
                        pl-1
                        
                        "
          >
            Library
          </p>

          <div>
            <ul>
              <div className="flex
              items-center
               my-6
                 pl-2
              text-dark-pink
              cursor-pointer
              hover:bg-dark-pink 
              hover:text-white
              transition
              hover:rounded-md
            ">
                <TbPlaylist className="mr-4" size={16} strokeWidth={3} />
                <li >Playlist</li>
              </div>
              <div className="flex
              items-center
               my-6
                 pl-2
              text-dark-pink
              cursor-pointer
              hover:bg-dark-pink 
              hover:text-white
              transition
              hover:rounded-md
            ">
                <BsMusicNote className="mr-4" size={16} />
                <li>Songs</li>
              </div>
              <div className="flex
              items-center
               my-6
                 pl-2
              text-dark-pink
              cursor-pointer
              hover:bg-dark-pink 
              hover:text-white
              transition
              hover:rounded-md
            ">
                <IoMdMicrophone className="mr-4" size={16} />
                <li>Artist</li>
              </div>
              <div className="flex
              items-center
               my-6
                 pl-2
              text-dark-pink
              cursor-pointer
              hover:bg-dark-pink 
              hover:text-white
              transition
              hover:rounded-md
            ">
                <IoMdAlbums className="mr-4" size={16} />
                <li>Albums</li>
              </div>
            </ul>
          </div>
        </div>

        <div className="py-3">
          <p
            className="
                        text-dark-pink
                        font-semibold
                        text-md
                        mb-5    
                        pl-1                    "
          >
            Playlists
          </p>
          <div>
            <ul>
              <div
                className="
              flex
              items-center
               my-6
                 pl-2
              text-dark-pink
              cursor-pointer
              hover:bg-dark-pink 
              hover:text-white
              transition
              hover:rounded-md
            
             

              "
              >
                <TbPlaylist className="mr-4" size={16} strokeWidth={3} />
                <li>Recently Added</li>
              </div>
              <div
                className="
              flex
              items-center
               my-6
                 pl-2
              text-dark-pink
              cursor-pointer
              hover:bg-dark-pink
              hover:text-white
              transition
              hover:rounded-md
              "
              >
                <TbPlaylist className="mr-4" size={16} strokeWidth={3} />
                <li>Recently Played</li>
              </div>

              <div
                className="
              flex
              items-center
               my-6
                 pl-2
              text-dark-pink
              cursor-pointer
              hover:bg-dark-pink
              hover:text-white
              transition
              hover:rounded-md
              "
              >
                <IoMdMicrophone className="mr-4" size={16} />
                <li>Top Artists</li>
              </div>
              <div
                className="
                flex
                items-center
                 my-6
                 pl-2
              text-dark-pink
              cursor-pointer
              hover:bg-dark-pink
              hover:text-white
              transition
              hover:rounded-md
                "
              >
                <IoMdAlbums className="mr-4" size={16} />
                <li>Top Albums</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
