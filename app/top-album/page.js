import Content from "@/components/sections/Content";
import Header from "@/components/sections/Header";
import Navbar from "@/components/sections/Navbar";
import { fetchAlbums } from "@/utils/fetchUtills";

export default async function Page() {
  const albums = await fetchAlbums();

  // console.log(albums);
  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto rounded-lg bg-gradient-to-r from-white to-orange-100">
      <Navbar>
        <Header pageTitle="Top Album" />
        <Content />
      </Navbar>
    </div>
  );
}
