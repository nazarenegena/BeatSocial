import Card from "@/components/Card";
import artist from "../../public/images/artist.jpeg";
import mic from "../../public/images/mic.jpeg";

const Content = () => {
  return (
    <div className="grid grid-cols-5 gap-5">
      <Card title={"all stars"} artist={"SZA"} imgSrc={artist} />
      <Card title={"umbrella"} artist={"rihhanna"} imgSrc={mic} />
      <Card title={"my heart"} artist={"pink"} imgSrc={artist} />
      <Card title={"my heart"} artist={"pink"} imgSrc={artist} />
      <Card title={"peace"} artist={"avici"} imgSrc={mic} />
      <Card title={"all stars"} artist={"SZA"} imgSrc={artist} />
      <Card title={"umbrella"} artist={"rihhanna"} imgSrc={mic} />
      <Card title={"my heart"} artist={"pink"} imgSrc={artist} />
      <Card title={"my heart"} artist={"pink"} imgSrc={artist} />
      <Card title={"peace"} artist={"avici"} imgSrc={mic} />
    </div>
  );
};

export default Content;
