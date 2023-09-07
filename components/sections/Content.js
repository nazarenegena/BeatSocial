import Card from "@/components/Card";
import artist from "../../public/images/artist.jpeg";
import mic from "../../public/images/mic.jpeg";

const Content = ({ playlists }) => {
  return (
    <div className="grid grid-cols-5 gap-5 px-10">
      {playlists?.map((playlist) => (
        <Card
          key={playlist.id}
          title={playlist.title}
          artist={playlist?.user?.name}
          imgSrc={playlist.picture_big}
        />
      ))}
    </div>
  );
};

export default Content;
