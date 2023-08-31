"use client";

import MiniCard from "@/components/MiniCard";
import disco from "../../public/images/disc.jpeg";
import earphone from "../../public/images/earphone.jpeg";

const HomeContent = () => {
  return (
    <div className=" ">
      {/* playlist */}
      <p className="mb-3 font-mono text-xl font-semibold text-secondary-orange">
        Playlist
      </p>

      <div className="grid grid-cols-5 gap-5 font-mono">
        <MiniCard title={"dancing"} artist={"Jay Z"} imgSrc={earphone} />
        <MiniCard title={"love"} artist={"Tay Tay"} imgSrc={disco} />
        <MiniCard title={"beats"} artist={"Ray"} imgSrc={earphone} />
        <MiniCard title={"Homey"} artist={"Drake"} imgSrc={disco} />
        <MiniCard title={"beats"} artist={"Ray"} imgSrc={earphone} />
      </div>

      {/* Songs */}
      <div className="my-6 ">
        <p className="mb-3 font-mono text-xl font-semibold text-secondary-orange">
          Songs
        </p>

        <div className="grid w-full grid-cols-5 gap-5">
          <MiniCard title={"dancing"} artist={"Jay Z"} imgSrc={earphone} />
          <MiniCard title={"love"} artist={"Tay Tay"} imgSrc={disco} />
          <MiniCard title={"beats"} artist={"Ray"} imgSrc={earphone} />
          <MiniCard title={"Homey"} artist={"Drake"} imgSrc={disco} />
          <MiniCard title={"beats"} artist={"Ray"} imgSrc={earphone} />
        </div>
      </div>

      {/* Artists */}
      <div className="my-6 ">
        <p className="mb-3 font-mono text-xl font-semibold text-secondary-orange">
          Artists
        </p>

        <div className="grid w-full grid-cols-5 gap-5">
          <MiniCard title={"dancing"} artist={"Jay Z"} imgSrc={earphone} />
          <MiniCard title={"love"} artist={"Tay Tay"} imgSrc={disco} />
          <MiniCard title={"beats"} artist={"Ray"} imgSrc={earphone} />
          <MiniCard title={"Homey"} artist={"Drake"} imgSrc={disco} />
          <MiniCard title={"beats"} artist={"Ray"} imgSrc={earphone} />
        </div>
      </div>

      {/* Albums */}
      <div className="my-6 ">
        <p className="mb-3 font-mono text-xl font-semibold text-secondary-orange">
          Albums
        </p>

        <div className="grid w-full grid-cols-5 gap-5">
          <MiniCard title={"dancing"} artist={"Jay Z"} imgSrc={earphone} />
          <MiniCard title={"love"} artist={"Tay Tay"} imgSrc={disco} />
          <MiniCard title={"beats"} artist={"Ray"} imgSrc={earphone} />
          <MiniCard title={"Homey"} artist={"Drake"} imgSrc={disco} />
          <MiniCard title={"beats"} artist={"Ray"} imgSrc={earphone} />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
