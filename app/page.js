import Header from "@/components/sections/Header";
import HomeContent from "@/components/sections/HomeContent";

export default function Home() {
  return (
    <div
      className="
    
    h-full
    w-full
    overflow-hidden
    overflow-y-auto
    rounded-lg
        from-white
                to-orange-100 px-4 px-4

    "
    >
      <Header pageTitle="Welcome back" />
      <HomeContent />
    </div>
  );
}
