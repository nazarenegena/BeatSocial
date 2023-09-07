import Card from "@/components/Card";
import Content from "@/components/sections/Content";
import Header from "@/components/sections/Header";
import Navbar from "@/components/sections/Navbar";
import { fetchAlbums } from "@/utils/fetchUtills";

export default async function Page() {
  const albums = await fetchAlbums({ limit: 30 });

  // console.log(albums);
  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto rounded-lg bg-gradient-to-r from-white to-orange-100">
      <Navbar>
        <Header pageTitle="Albums" />
        <div className="grid grid-cols-5 gap-5 px-10">
          {albums?.map((album) => (
            <Card
              title={album?.title}
              imgSrc={album?.cover_big}
              artist={album?.artist?.name}
            />
          ))}
        </div>
      </Navbar>
    </div>
  );
}
