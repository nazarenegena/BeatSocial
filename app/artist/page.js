import Card from "@/components/Card";
import Content from "@/components/sections/Content";
import Header from "@/components/sections/Header";
import Navbar from "@/components/sections/Navbar";
import { fetchTopArtists } from "@/utils/fetchUtills";
import Link from "next/link";

export default async function Page() {
  const artists = await fetchTopArtists({ limit: 20 });
  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto rounded-lg bg-gradient-to-r from-white to-orange-100">
      <Navbar>
        <Header pageTitle="Artist" />
        <div className="grid grid-cols-5 gap-5 px-10">
          {artists?.map((artist) => (
            <Link key={artist.id} href={`/artist/${artist.id}`}>
              <Card
                title={artist?.name}
                imgSrc={artist?.picture_big}
                key={artist?.id}
              />
            </Link>
          ))}
        </div>
        <Content />
      </Navbar>
    </div>
  );
}
