import Header from "@/components/sections/Header";
import HomeContent from "@/components/sections/HomeContent";

export default function Home() {
  return (
    <div className=" mt-2 h-full w-full overflow-hidden overflow-y-auto rounded-lg bg-gradient-to-r from-white to-orange-100 px-4">
      <Header pageTitle="Welcome back" />
      <HomeContent />
    </div>
  );
}
