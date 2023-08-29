import SearchModal from "@/components/SearchModal";
import Header from "@/sections/Header";
import HomeContent from "@/sections/HomeContent";

export default function Home() {
  return (
    <div
      className="
    
    rounded-lg
    h-full
    w-full
    overflow-hidden
    overflow-y-auto
    
    
        px-4
    "
    >
      {/* <SearchModal /> */}
      <Header />
      <HomeContent />
    </div>
  );
}
