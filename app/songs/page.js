import Content from "@/components/sections/Content";
import Header from "@/components/sections/Header";

export default function Page() {
  return (
    <div
      className="
    
    mt-2
    h-full
    w-full
    overflow-hidden
    overflow-y-auto
        rounded-lg
        from-white
                to-orange-100 px-4 px-4

    "
    >
      <Header pageTitle="Songs" />
      <Content />
    </div>
  );
}
