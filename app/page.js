import Header from "@/components/Header";

export default function Home({children}) {
  return (
    <div className="
    
    rounded-lg
    h-full
    w-full
    overflow-hidden
    overflow-y-auto
    ">
      <Header>
        {children}
     </Header>
      </div>
      
  
  )
}
