"use client";
import Link from 'next/link'
import { TbPlaylist } from "react-icons/tb";
import { BsMusicNote } from "react-icons/bs";
import { IoMdAlbums, IoMdMicrophone } from "react-icons/io";

const Library = () => {
  
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
              {/* playlist */}
              <Link className="flex
              items-center
               my-6
                 pl-2
              cursor-pointer
              hover:shadow-md
              hover:text-secondary-orange
              transition
              hover:rounded-md
                            hover:font-medium

            "
                href="/playlist"
              >
                <TbPlaylist className="mr-4" size={16} strokeWidth={3} />
                <li >Playlist</li>
              </Link>

              {/* songs */}
              <Link className="flex
              items-center
               my-6
                 pl-2
              cursor-pointer
             hover:shadow-md
              hover:text-secondary-orange
              transition
              hover:rounded-md
                            hover:font-medium

            "
                href="/songs"
              >
                <BsMusicNote className="mr-4" size={16} />
                <li>Songs</li>
              </Link>

              {/* the artist page */}
              <Link className="flex
              items-center
               my-6
                 pl-2
             
              cursor-pointer
              hover:shadow-md
              hover:text-secondary-orange
              transition
              hover:rounded-md
                            hover:font-medium

            "
              href="/artist"
              >
                <IoMdMicrophone className="mr-4" size={16} />
                <li>Artists</li>
              </Link>

              {/* albums */}
              <Link className="flex
              items-center
               my-6
                 pl-2
             
              cursor-pointer
              hover:shadow-md
              hover:text-secondary-orange
              transition
              hover:rounded-md
                            hover:font-medium

            "
              href="albums"
              >
                <IoMdAlbums className="mr-4" size={16} />
                <li>Albums</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="py-3">
          <p
            className="
                       
                        font-semibold
                        text-md
                        mb-5    
                        pl-1                    "
          >
            Playlists
          </p>
          <div>
            <ul>
              {/* recently added */}
              <Link
                className="
              flex
              items-center
               my-6
                 pl-2
             
              cursor-pointer
              hover:shadow-md
              hover:text-secondary-orange
              transition
              hover:rounded-md
                            hover:font-medium

              "
                href="/recently-added"
              >
                <TbPlaylist className="mr-4" size={16} strokeWidth={3} />
                <li>Recently Added</li>
              </Link>
              {/* recently played */}
              <Link
                className="
              flex
              items-center
               my-6
                 pl-2
             
              cursor-pointer
              hover:shadow-md
              hover:text-secondary-orange
              transition
              hover:rounded-md
                            hover:font-medium

              "
                href="/recently-played"
              >
                <TbPlaylist className="mr-4" size={16} strokeWidth={3} />
                <li>Recently Played</li>
              </Link>
{/* top artist */}
              <Link
                className="
              flex
              items-center
               my-6
                 pl-2
              
              cursor-pointer
              hover:shadow-md
              hover:text-secondary-orange
              transition
              hover:rounded-md
                            hover:font-medium

              "
                href="/top-artist"
              >
                <IoMdMicrophone className="mr-4" size={16} />
                <li>Top Artists</li>
              </Link>

              {/* top albums */}
              <Link
                className="
                flex
                items-center
                 my-6
                 pl-2
              
              cursor-pointer
              hover:shadow-md
              hover:text-secondary-orange
              transition
              hover:rounded-md
                            hover:font-medium

                "
                href="/top-album"
              >
                <IoMdAlbums className="mr-4" size={16} />
                <li>Top Albums</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
