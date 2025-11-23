import Image from "next/image"; 
import Link from "next/link";

export default function Home() {
  return (
 <div id="Pictures" className="mt-10 fixed left-20 top-15">
         <Image
           src="/GradPic.jpg"
           alt="Graduation Picture"
           width={250}
           height={250}
           className="rounded-full"
         />
      
   <div className=" fixed top-30 right-150 text-center">
      <h1 id="title" className="text-3xl font-bold">
       Elementary
      </h1>

<h1
        id="body"
        className="text-sm  fixed top-40 right-85 text-center"
      >
        A Student Athlete, currently studying in Naga College Foundation Inc.
      </h1>
 </div>
 <div className=" fixed top-50 right-123 text-right">
      <h1 id="title" className="text-3xl font-bold">
       Junior High School
      </h1>

<h1
        id="body"
        className="text-sm text-left fixed top-60  end-right-150 start-left-50 "
      >
        I studies at Camarines Sur 
        National High School,
        I was under Special Program 
        in the Arts Curriculum.
        That is when my love grows
        for dancing.
       
      </h1>
 </div>
  <div className=" fixed top-75 right-123 text-right">
      <h1 id="title" className="text-3xl font-bold">
       Senior High School
      </h1>

<h1
        id="body"
        className="text-sm text-left fixed top-85  end-right-150 start-left-50 "
      >
        When I was in Senior High School
        I studied at Naga College Foundation Inc.
        Studying in this school, I started to join
        events that helps me to boost my confidence
        but not just that I also earn honor medals
        to give back to my parents hardwork.
       
      </h1>
 </div>

     <div className="flex gap-4 mt-8">
     <Link href="/contact">
          <button className="group inline-block bg-[#0e3321] text-white text-medium px-5 py-4 w-[150px] rounded cursor-pointer">
            <span className="inline-block relative transition-all duration-500">
              Contact
              <span className="opacity-0 -right-5 absolute transition-all duration-500 group-hover:opacity-100 group-hover:right-0">
                »
              </span>
            </span>
          </button>
        </Link>
        </div>
        </div>
  );
}