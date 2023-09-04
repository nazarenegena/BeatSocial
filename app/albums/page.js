import Content from "@/components/sections/Content";
import Header from "@/components/sections/Header";
import Navbar from "@/components/sections/Navbar";

export default function Page() {
  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto rounded-lg bg-gradient-to-r from-white to-orange-100">
      <Navbar>
        <Header pageTitle="Albums" />
        <Content />
      </Navbar>
    </div>
  );
}
