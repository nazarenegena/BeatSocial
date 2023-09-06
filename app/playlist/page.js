import Content from "@/components/sections/Content";
import Header from "@/components/sections/Header";
import Navbar from "@/components/sections/Navbar";
import { fetchTopPlaylists } from "@/utils/fetchUtills";

export default async function Page() {
  const playlists = await fetchTopPlaylists();
  console.log(playlists, "playlists");
  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto rounded-lg bg-gradient-to-r from-white to-orange-100">
      <Navbar>
        <Header pageTitle="Playlist" />
        <Content playlists={playlists} />
      </Navbar>
    </div>
  );
}
