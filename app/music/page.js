import City from "../../public/images/city.jpeg";
import LyricSection from "@/components/sections/LyricsSection";
import Navbar from "@/components/sections/Navbar";
import TrackLineUpSection from "@/components/sections/TrackLineUpSection";

export default function Page() {
  return (
    // this is the page that contains the tracks and play action
    <div className="h-full w-full overflow-hidden overflow-y-auto rounded-lg bg-gradient-to-r from-white to-orange-100 ">
      <Navbar>
        <div className="py-8 font-mono ">
          <p className="text-md font-bold text-secondary-orange">Trending</p>
          <h2 className="mt-6 text-4xl font-semibold">Top Hits</h2>
        </div>
        <div>
          <LyricSection lyricImg={City} />
        </div>
        <div>
          <TrackLineUpSection />
        </div>
      </Navbar>
    </div>
  );
}
