import LyricSection from "@/components/LyricsSection";
import Navbar from "@/components/sections/Navbar";
import TrackLineUpSection from "@/components/sections/TrackLineUpSection";
import { fetchPlaylist } from "@/utils/fetchUtills";

export default async function Page({ params }) {
  const { picture_big, tracks, title } = await fetchPlaylist(params.id);
  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto rounded-lg bg-gradient-to-r from-white to-orange-100">
      <Navbar>
        <div>
          <LyricSection
            title={title}
            label="Playlist"
            lyricImg={picture_big}
            tracks={tracks.data}
          />
        </div>
        <TrackLineUpSection tracks={tracks.data} />
      </Navbar>
    </div>
  );
}
