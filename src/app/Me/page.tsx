import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-black font-sans min-h-screen">
      <div className="max-w-6xl mx-auto py-16 px-6 space-y-20">

        <Link href="/about" className="inline-block mt-0">
           <button className="px-4 py-2 bg-black text-white rounded-full mb-4">
               Back
            </button>
        </Link>
        <div className="flex items-center justify-between flex-wrap gap-5">

        
          <div className="flex flex-col items-center justify-center text-center w-full md:w-auto">
            <p className="text-xl">I love to fly</p>
            <Link href="/Fly">
            <button className="mt-1 bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-neutral-800 transition">
              View More
            </button>
            </Link>
          </div>

         
          <div className="bg-gray-100 p-4 rounded-xl flex gap-3 overflow-x-auto">
            <Image src="/pep.jpg" width={160} height={112} className="rounded-lg object-cover" alt="Flying 1" />
            <Image src="/milo.jpg" width={160} height={112} className="rounded-lg object-cover" alt="Flying 2" />
            <Image src="/fly.jpg" width={160} height={112} className="rounded-lg object-cover" alt="Flying 3" />
          </div>

        </div>

        <div className="flex items-center justify-between flex-wrap gap-5">

    
          <div className="bg-gray-100 p-4 rounded-xl flex gap-3">
    <Image src="/trav.jpg" width={160} height={112} className="rounded-lg object-cover" alt="Travel 1" />
    <Image src="/2.1.jpg" width={160} height={112} className="rounded-lg object-cover" alt="Travel 2" />
    <Image src="/travel.jpg" width={160} height={112} className="rounded-lg object-cover" alt="Travel 3" />
  </div>

 
     <div className="flex flex-col justify-center items-center md:items-start">
      <p className="text-xl">I love to travel</p>
       <Link href="/Travel">
        <button className="mt-1 bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-neutral-800 transition">
          View More
      </button>
      </Link>
     </div>

        
        </div>

        <div className="flex items-center justify-between flex-wrap gap-5">

      
          <div className="flex flex-col justify-center items-center md:items-start">
            <p className="text-xl">Academic story</p>
            <Link href="/education">
            <button className="mt-1 bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-neutral-800 transition">
              View More
            </button>
            </Link>
          </div>

      
          <div className="bg-gray-100 p-4 rounded-xl flex gap-3">
            <Image src="/GradPic.JPG" width={160} height={112} className="rounded-lg object-cover" alt="Academic 1" />
            <Image src="/graduate.jpg" width={160} height={112} className="rounded-lg object-cover" alt="Academic 2" />
            <Image src="/honor.jpg" width={160} height={112} className="rounded-lg object-cover" alt="Academic 3" />
          </div>

        </div>

      </div>
    </main>
  );
}