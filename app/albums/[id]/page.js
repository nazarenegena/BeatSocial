import LyricSection from "@/components/LyricsSection";
import Navbar from "@/components/sections/Navbar";
import TrackLineUpSection from "@/components/sections/TrackLineUpSection";
import { fetchAlbum, fetchPlaylist } from "@/utils/fetchUtills";

export default async function Page({ params }) {
  const { cover_big, tracks, title } = await fetchAlbum(params.id);
  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto rounded-lg bg-gradient-to-r from-white to-orange-100">
      <Navbar>
        <div>
          <LyricSection
            title={title}
            label="Album"
            lyricImg={cover_big}
            tracks={tracks.data}
          />
        </div>
        <TrackLineUpSection tracks={tracks.data} />
      </Navbar>
    </div>
  );
}
