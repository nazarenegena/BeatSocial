import Content from "@/components/sections/Content";

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
        px-4
    "
    >
      <p className="mb-3 font-mono text-xl font-semibold text-secondary-orange">
        Albums
      </p>
      <Content />
    </div>
  );
}
