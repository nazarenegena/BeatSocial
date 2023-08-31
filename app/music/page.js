import Box from "@/components/Box";
import City from "../../public/images/city.jpeg";
import LyricSection from "@/components/sections/LyricsSection";
import SocialsSection from "@/components/sections/SocialsSection";
import TrackLineUpSection from "@/components/sections/TrackLineUpSection";

export default function Page() {
  return (
    // this is the page that contains the tracks and play action
    <div
      className="
    
    
    h-full
    w-auto
    justify-between
    overflow-hidden
    overflow-y-auto
        rounded-lg
         bg-gradient-to-r from-white to-orange-100
        px-12
    "
    >
      <div className="   pb-8 pt-12 font-mono ">
        <p className="text-md font-bold text-secondary-orange">Trending</p>
        <h2 className="mt-6 text-4xl font-semibold">Top Hits</h2>
      </div>
      <div>
        <LyricSection lyricImg={City} />
      </div>
      <div>
        <TrackLineUpSection />
      </div>
    </div>
  );
}
