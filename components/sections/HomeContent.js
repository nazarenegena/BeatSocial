import MiniCard from "@/components/MiniCard";

import {
  fetchTopArtists,
  fetchTopPlaylists,
  fetchTopTracks,
  fetchAlbums,
} from "@/utils/fetchUtills";
import Link from "next/link";

const HomeContent = async () => {
  const songs = await fetchTopTracks({ limit: 5 });
  const playlists = await fetchTopPlaylists({ limit: 5 });
  const artists = await fetchTopArtists({ limit: 5 });
  const albums = await fetchAlbums({ limit: 5 });
  return (
    <div className="px-10">
      {/* playlist */}
      <p className="mb-3 font-mono text-xl font-semibold text-secondary-orange">
        Playlist
      </p>

      <div className="grid grid-cols-5 gap-5 font-mono">
        {playlists?.map((playlist) => (
          <Link key={playlist.id} href={`/playlist/${playlist.id}`}>
            <MiniCard
              key={playlist.id}
              title={playlist.title}
              artist={playlist?.user?.name}
              imgSrc={playlist.picture_big}
            />
          </Link>
        ))}
      </div>

      {/* Songs */}
      <div className="my-6 ">
        <p className="mb-3 font-mono text-xl font-semibold text-secondary-orange">
          Songs
        </p>

        <div className="grid w-full grid-cols-5 gap-5">
          {songs?.map((song) => (
            <MiniCard
              key={song.id}
              title={song.title}
              artist={song?.artist?.name}
              imgSrc={song?.album?.cover_big}
            />
          ))}
        </div>
      </div>

      {/* Artists */}
      <div className="my-6 ">
        <p className="mb-3 font-mono text-xl font-semibold text-secondary-orange">
          Artists
        </p>

        <div className="grid grid-cols-5 gap-5 font-mono">
          {artists?.map((artist) => (
            <MiniCard
              key={artist.id}
              title={artist.name}
              artist={artist?.artist?.name}
              imgSrc={artist?.picture_big}
            />
          ))}
        </div>
      </div>

      {/* Albums */}
      <div className="my-6 ">
        <p className="mb-3 font-mono text-xl font-semibold text-secondary-orange">
          Albums
        </p>
        <div className="grid grid-cols-5 gap-5 font-mono">
          {albums?.map((album) => (
            <MiniCard
              key={album.id}
              title={album.name}
              album={album?.album?.name}
              imgSrc={album?.cover_big}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
