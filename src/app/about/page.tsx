import Image from "next/image"; 
import Link from "next/link";

export default function Home() {
  return (
 <div id="Pictures" className="mt-10 fixed left-20 top-15">
         <Image
           src="/fly.jpg"
           alt="Fly"
           width={250}
           height={250}
           className="rounded-full"
         />
      
   <div className=" fixed top-30 right-110 text-center">
      <h1 id="title" className="text-3xl font-bold">
       Hi, I am Hialeah Blanco
      </h1>

<h1
        id="body"
        className="text-sm text-left fixed top-40  end-right-150 start-left-50"
      >
        A Student Athlete, currently studying in Naga College Foundation Inc.
        I am part of NCF Tigers Pep Squad and a 2nd Year College in
        Batchelor of Science in Information Technology. I am 20 years old who's enjoying the life and vibe with it. 
      </h1>
 </div>
 <div className=" fixed top-90 right-140 text-right">
      <h1 id="title" className="text-2xl font-bold">
       Motto in Life
      </h1>

<h1
        id="body"
        className="text-sm text-left fixed top-99  end-right-150 start-left-50 "
      >
        My Motto in life is "Do whatever you wanted to do while you are alive".
       
      </h1>
 </div>
  <div className=" fixed top-65 right-153 text-right">
      <h1 id="title" className="text-2xl font-bold">
       Hobbies
      </h1>

<h1
        id="body"
        className="text-sm text-left fixed top-75  end-right-150 start-left-50 "
      >
       All I do in my life is to go training. But whenever I have time 
       I always go Karaoke to have some fun. Sometimes I go to coffee shop with my friends. And I also love watching Kdramas.
       
      </h1>
 </div>
 
  </div>
  
  

  );
}