import Card from "@/components/Card";
import artist from "../../public/images/artist.jpeg";
import mic from "../../public/images/mic.jpeg";
import Link from "next/link";

const Content = ({ playlists }) => {
  return (
    <div className="grid grid-cols-5 gap-5 px-10">
      {playlists?.map((playlist) => (
        <Link key={playlist.id} href={`/playlist/${playlist.id}`}>
          <Card
            key={playlist.id}
            title={playlist.title}
            artist={playlist?.user?.name}
            imgSrc={playlist.picture_big}
          />
        </Link>
      ))}
    </div>
  );
};

export default Content;
