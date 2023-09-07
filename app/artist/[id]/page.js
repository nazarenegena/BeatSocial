import LyricSection from "@/components/LyricsSection";
import Navbar from "@/components/sections/Navbar";
import TrackLineUpSection from "@/components/sections/TrackLineUpSection";
import { fetchArtistTracks } from "@/utils/fetchUtills";

export default async function Page({ params }) {
  const data = await fetchArtistTracks(params.id);

  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto rounded-lg bg-gradient-to-r from-white to-orange-100">
      <Navbar>
        <div>
          <LyricSection
            title={data[0]?.artist?.name}
            label="Artist"
            lyricImg={data[0]?.album?.cover_big}
            tracks={data}
          />
        </div>
        <TrackLineUpSection tracks={data} />
      </Navbar>
    </div>
  );
}
