import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center absolute left-10">
      <h1 id="title" className="text-5xl font-bold">
        Want to know me?
      </h1>
     
      <div id="Pictures" className="mt-10 relative">
        <Image
          src="/ID.jpg"
          alt="Hialeah's Profile"
          width={250}
          height={250}
          className="rounded-full"
        />
      </div>
   
      <h1
        id="body"
        className="text-sm text-justify mt-6 max-w-[300px]"
      >
        A Student Athlete, currently studying in Naga College Foundation Inc.
      </h1>
  
      <div className="flex gap-4 mt-8">

        <Link href="/about">
          <button className="group inline-block bg-[#0e3321] text-white text-medium px-5 py-4 w-[150px] rounded cursor-pointer">
            <span className="inline-block relative transition-all duration-500">
              About Me
              <span className="opacity-0 -right-5 absolute transition-all duration-500 group-hover:opacity-100 group-hover:right-0">
                »
              </span>
            </span>
          </button>
        </Link>

       
        <Link href="/education">
          <button className="group inline-block bg-[#0e3321] text-white text-medium px-5 py-4 w-[150px] rounded cursor-pointer">
            <span className="inline-block relative transition-all duration-500">
              Education
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
