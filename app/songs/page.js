import Card from "@/components/Card";
import Content from "@/components/sections/Content";
import Header from "@/components/sections/Header";
import Navbar from "@/components/sections/Navbar";
import { fetchTopTracks } from "@/utils/fetchUtills";

export default async function Page() {
  const songs = await fetchTopTracks({ limit: 20 });
  console.log(songs);
  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto rounded-lg bg-gradient-to-r from-white to-orange-100">
      <Navbar>
        <Header pageTitle="Songs" />
        <div className="grid grid-cols-5 gap-5 px-10">
          {songs?.map((song, index) => (
            <Card
              key={song.id}
              title={song?.title}
              artist={song?.artist?.name}
              imgSrc={song?.album?.cover_big}
              tracks={songs}
              index={index}
            />
          ))}
        </div>
      </Navbar>
    </div>
  );
}
