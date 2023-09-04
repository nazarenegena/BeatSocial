"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { TbPlaylist } from "react-icons/tb";
import { BsMusicNote } from "react-icons/bs";
import { IoMdAlbums, IoMdMicrophone } from "react-icons/io";

const Library = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      <div
        className="
                flex
                flex-col
                px-5
               
                "
      >
        <div className="my-6">
          <p
            className="
                        
                        text-md
                        mb-8
                        pl-1
                        
                        
                        "
          >
            Library
          </p>

          <div>
            <ul>
              {/* playlist */}
              <Link
                href="/playlist"
                className={`mb-10 flex cursor-pointer items-center pl-2 transition hover:rounded-md hover:font-medium hover:text-secondary-orange hover:shadow-md ${
                  pathname === "/playlist"
                    ? "active  text-secondary-orange"
                    : "text-black"
                }`}
              >
                <TbPlaylist className="mr-4" size={16} strokeWidth={3} />
                <li>Playlist</li>
              </Link>

              {/* songs */}
              <Link
                href="/songs"
                className={`my-10 flex cursor-pointer items-center pl-2 transition hover:rounded-md hover:font-medium hover:text-secondary-orange hover:shadow-md ${
                  pathname === "/songs"
                    ? "active  text-secondary-orange"
                    : "text-black"
                }`}
              >
                <BsMusicNote className="mr-4" size={16} />
                <li>Songs</li>
              </Link>

              {/* the artist page */}
              <Link
                href="/artist"
                className={`my-10 flex cursor-pointer items-center pl-2 transition hover:rounded-md hover:font-medium hover:text-secondary-orange hover:shadow-md ${
                  pathname === "/artist"
                    ? "active  text-secondary-orange"
                    : "text-black"
                }`}
              >
                <IoMdMicrophone className="mr-4" size={16} />
                <li>Artists</li>
              </Link>

              {/* albums */}
              <Link
                href="/albums"
                className={`my-10 flex cursor-pointer items-center pl-2 transition hover:rounded-md hover:font-medium hover:text-secondary-orange hover:shadow-md ${
                  pathname === "/albums"
                    ? "active  text-secondary-orange"
                    : "text-black"
                }`}
              >
                <IoMdAlbums className="mr-4" size={16} />
                <li>Albums</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="">
          <p
            className="
                       
                        text-md
                        mb-8
                        pl-1    
                                            "
          >
            Playlists
          </p>
          <div>
            <ul>
              {/* recently added */}
              <Link
                href="/recently-added"
                className={`mb-10 flex cursor-pointer items-center pl-2 transition hover:rounded-md hover:font-medium hover:text-secondary-orange hover:shadow-md ${
                  pathname === "/recently-added"
                    ? "active font-semibold text-secondary-orange"
                    : "text-black"
                }`}
              >
                <TbPlaylist className="mr-4" size={16} strokeWidth={3} />
                <li>Recently Added</li>
              </Link>
              {/* recently played */}
              <Link
                href="/recently-played"
                className={`my-10 flex cursor-pointer items-center pl-2 transition hover:rounded-md hover:font-medium hover:text-secondary-orange hover:shadow-md ${
                  pathname === "/recently-played"
                    ? "active font-semibold text-secondary-orange"
                    : "text-black"
                }`}
              >
                <TbPlaylist className="mr-4" size={16} strokeWidth={3} />
                <li>Recently Played</li>
              </Link>
              {/* top artist */}
              <Link
                href="/top-artist"
                className={`my-10 flex cursor-pointer items-center pl-2 transition hover:rounded-md hover:font-medium hover:text-secondary-orange hover:shadow-md ${
                  pathname === "/top-artist"
                    ? "active font-semibold text-secondary-orange"
                    : "text-black"
                }`}
              >
                <IoMdMicrophone className="mr-4" size={16} />
                <li>Top Artists</li>
              </Link>

              {/* top albums */}
              <Link
                href="/top-album"
                className={`my-10 flex cursor-pointer items-center pl-2 transition hover:rounded-md hover:font-medium hover:text-secondary-orange hover:shadow-md ${
                  pathname === "/top-album"
                    ? "active  text-secondary-orange"
                    : "text-black"
                }`}
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
