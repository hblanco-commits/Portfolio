import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
<div className="p-6 space-y-10">

  <Link href="/about">
  <button className="px-5 py-2 bg-black text-white rounded-full">
    Back
  </button>
 </Link>
 
  <div className="bg-gray-100 p-6 rounded-xl flex justify-center gap-6">
    <img src="/familya.jpg" className="w-48 h-36 object-cover rounded-lg" />
    <img src="/whole.jpg" className="w-48 h-36 object-cover rounded-lg" />
    <img src="/faam.JPEG" className="w-48 h-36 object-cover rounded-lg" />
  </div>

 
  <div className="bg-gray-100 p-6 rounded-xl flex justify-center gap-6">
    <img src="/nany.JPEG" className="w-48 h-36 object-cover rounded-lg" />
    <img src="/pin.JPEG" className="w-48 h-36 object-cover rounded-lg" />
    <img src="/cos.jpg" className="w-48 h-36 object-cover rounded-lg" />
  </div>

  <p className="max-w-3xl mx-auto text-center text-gray-800 leading-relaxed text-lg">
    This is my family, the people I value, treasure, and love the most. They are the one
    who shaped me for being who I am today. They raised me to be a kind, loving, and
    adventurous person. Because of them I was able to show my love openly to people who
    enters in my life. They are the ones who truly believe in my capabilities.
  </p>

</div>
  );
}