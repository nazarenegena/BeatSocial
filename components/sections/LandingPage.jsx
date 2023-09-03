import Link from "next/link";
import Image from "next/image";
import floatBg from "../../public/images/floatHeadPhones.jpeg"
import dashboardSection from "../../public/images/dashboardSection.png"
import playSection from "../../public/images/playsection.png"
import browseSection from "../../public/images/browsesection.png"
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import Button from "../Button";
import { TbBrandBeats } from "react-icons/tb";

const LandingPage = () => {
  return (
    <div className="w-full h-full ">
        <div>
            
      <div className="flex justify-between sticky top-0 shadow-lg px-8 py-4 font-mono bg-white z-40">

        {/* Navbar section */}
        <div className="flex items-center font-semibold text-secondary-orange">
<TbBrandBeats size={50} strokeWidth={2} />
            <p>beatsocial</p>
        </div>
         
        <div className="flex font-mono items-center ml-40">
          <p className="mx-10 hover:text-secondary-orange cursor-pointer hover:font-medium hover:border-b border-secondary-orange transition p-2">About</p>
          <p className=" hover:text-secondary-orange cursor-pointer hover:font-medium hover:border-b border-secondary-orange transition p-2">Features</p>
        </div>

        <div>
            <Button className={" text-bold mr-10 w-30 rounded-md border-2 border-black px-8 py-2 font-medium text-black transition hover:border-secondary-orange hover:bg-secondary-orange hover:text-white"} title={"sign in"}/>
            <Button className={" w-30 mr-8 rounded-md border-2 border-black bg-black px-8 py-2 font-medium text-white transition hover:border-secondary-orange hover:bg-secondary-orange hover:text-white"} title={"sign Up"}/>
        </div>
      </div>
      
      {/* content section */}
       <div className=" h-full">

{/* hero section */}
    <div className="absolute z-20 left-[42rem] top-80">
         <p className="text-7xl font-bold text-white drop-shadow-2xl shadow-black font-mono">Feel The Beat</p>
         <p className="font-semibold text-xl pt-6 font-mono drop-shadow-2xl shadow-black">music for you ...</p>
    </div>
   <div className="absolute inset-0 shadow-inner">
    <Image src={floatBg} className=" h-[43rem] max-w-full object-cover "/>

   </div>

   {/* features section */}
             <div className="relative z-10 h-[38rem]  bg-secondary-orange opacity-20 "></div>
<div className="bg-white pt-12 pb-24 h-auto">
<div className=" flex  items-center mb-32 mt-10 mx-40">
    <Image src={playSection} className="h-96 w-1/2 object-contain mx-12 rounded-lg shadow-2xl" />
    <div className="ml-48">
    <p className="text-4xl font-light mb-8">Listen to your music.</p>
<p className="text-lg font-medium text-zinc-700 tracking-wide ">Get to relax whilst listening to your choice of music. <br/>
 Scroll to discover related tracks that you can listen to as well <br/>  </p>
    </div>
    
</div>

<div className=" flex  items-center my-20 mx-40">
    <div className="ml-20">
    <p className="text-4xl font-light mb-8">Keep Up with your Music.</p>
<p className="text-lg font-medium text-zinc-700 tracking-wide">How convinient would it be to Curate your desired playlist. <br/>
Our dashboard gives you the chance to choose and section <br/> 
your preferences. <br/> from playlists to albums to artist </p>
    </div>
        <Image src={dashboardSection} className="h-96 w-1/2 object-contain ml-56 rounded-lg shadow-2xl" />

</div>

<div className=" flex  items-center mb-32 mt-32 mx-40 rounded-lg">
    <Image src={browseSection} className="h-96 w-1/2 object-contain mx-12 rounded-lg shadow-2xl" />
    <div className="ml-48">
    <p className="text-4xl font-light mb-8">Find what you want to listen to</p>
<p className="text-lg font-medium text-zinc-700 tracking-wide ">Seamlessly browse for your desired choice of music, album, artist and even playlist<br/>
Search results are as quick as you hit enter. <br/> 

<div className="mt-12 h-12 w-44 px-4 py-3 border-2 bg-secondary-orange border-secondary-orange text-white font-medium  flex justify-center items-center rounded-lg font-mono hover:shadow-lg transition  ">
<Link href="/dashboard">
<p>Get Started</p>

    </Link>
</div>

 </p>
    </div>
    
</div>

</div>

{/* About section */}

<div className="mb-32">
    <div className=" h-full flex ">
        <div className="mx-32 shadow-lg rounded-md bg-gradient-to-t from-white to-orange-200 p-7">
                <p className="py-10 font-medium text-xl">Our Inspiration</p>

<p className="leading-10 text-lg">
As avid music lovers, We drew inspiration from the revolutionized music experience we have had with various apps such as Spotify. 

Our inspiration for this project came from our admiration for Spotify's user experience and curiosity about how such a platform is built. We wanted to challenge ourselves by creating an inspiration and interpretation of this iconic music streaming service. By doing so, We aimed to deepen our knowledge of web development, front-end design, and back-end functionality.

Additionally, this project serves as a vital component of our portfolio. It's a testament to our commitment to lifelong learning and dedication to delivering polished, user-centric web applications.

</p>
        </div>
        <div className="mx-32 shadow-lg rounded-md bg-gradient-to-t from-white to-orange-200 p-7">
                <p className="py-10 font-medium text-xl">About</p>

    <p className="leading-10 text-lg">
Welcome to Beatsocial, a music app born out of our deep appreciation for music, fascination with cutting-edge technology, and desire to showcase our skills as developers.

Beatsocial is not a streaming service, but a social platform. We provide a gateway to a world of melodies, rhythms, and emotions. Beatsocial's intends on providing a user-friendly interface, personalized playlists, as well as an extensive music library.

Beatsocial is not only a music streaming service but a social platform. 

We hope you enjoy exploring this project as much as we enjoyed creating it. Feel free to browse through the features, test the functionality, and get a taste of what we can bring to the world of web development. Thank you for visiting Beatsocial, and look forward to sharing more of our journey with you.</p>
        </div>
    </div>
</div>

{/* contact section */}
<div className="flex flex-col justify-center items-center pb-6">
    <p className="text-black font-semibold text-lg">Meet the Team</p>
    <div className="flex justify-center items-center mt-8">
 <div className="mx-10 flex items-center shadow-md px-40 py-6">
        <p className="font-semibold">Nazarene Wanyaga</p>
        <div className="mx-10">
 <p className="flex items-center my-5 text-secondary-orange font-semibold cursor-pointer">
     <BsGithub className="mx-3" size={20} fill="#EC7434"/>
    Github
   
 </p>
        <p className="flex items-center text-secondary-orange font-semibold cursor-pointer">
            <BsLinkedin className="mx-3" size={20} fill="#EC7434"/>
            Linked in
            
        </p>
        </div>
       
    </div>
   <div className="mx-10 flex items-center shadow-md px-40 py-6">
        <p className="font-semibold">Joe Wainaina</p>
        <div className="mx-10">
 <p className="flex items-center my-5 text-secondary-orange font-semibold cursor-pointer">
     <BsGithub className="mx-3" size={20} fill="#EC7434"/>
    Github
   
 </p>
        <p className="flex items-center text-secondary-orange font-semibold cursor-pointer">
            <BsLinkedin className="mx-3" size={20} fill="#EC7434"/>
            Linked in
            
        </p>
        </div>
       
    </div>
   
    </div>
   
</div>
<div>

</div>
      </div>
              </div>

     
      
    </div>
  );
};

export default LandingPage;
