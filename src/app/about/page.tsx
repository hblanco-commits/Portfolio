import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-black font-sans min-h-screen">
      
       <Link href="/" className="inline-block mt-6">
         <button className="px-5 py-2 bg-black text-white rounded-full">
             Back
          </button>
        </Link>

      <h1 className="text-5xl font-bold px-8 pt-10">
        Which space would you <br /> like to visit?
      </h1>

      
      <div className="flex justify-center gap-10 mt-14 flex-wrap px-6">

       
        <div className="bg-gray-100 w-64 py-10 rounded-2xl shadow-sm text-center">
          <h2 className="text-xl font-medium mb-4">Me</h2>

          <div className="w-36 h-36 mx-auto mb-6 overflow-hidden rounded-full">
            <Image
              src="/tra.jpg"
              alt="Me"
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>

          <Link href="/Me">
            <button className="bg-black text-white px-10 py-3 rounded-full text-lg hover:bg-neutral-800 transition">
              Visit
            </button>
          </Link>
        </div>

        
        <div className="bg-gray-100 w-64 py-10 rounded-2xl shadow-sm text-center">
          <h2 className="text-xl font-medium mb-4">Family</h2>

          <div className="w-36 h-36 mx-auto mb-6 overflow-hidden rounded-full">
            <Image
              src="/familya.jpg"
              alt="Family"
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>

          <Link href="/Family">
            <button className="bg-black text-white px-10 py-3 rounded-full text-lg hover:bg-neutral-800 transition">
              Visit
            </button>
          </Link>
        </div>

        <div className="bg-gray-100 w-64 py-10 rounded-2xl shadow-sm text-center">
          <h2 className="text-xl font-medium mb-4">Friends</h2>

          <div className="w-36 h-36 mx-auto mb-6 overflow-hidden rounded-full">
            <Image
              src="/lov.jpg"
              alt="Friends"
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>

          <Link href="/Friends">
            <button className="bg-black text-white px-10 py-3 rounded-full text-lg hover:bg-neutral-800 transition">
              Visit
            </button>
          </Link>
        </div>

      </div>

    </main>
  );
}