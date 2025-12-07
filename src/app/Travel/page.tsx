import Image from "next/image"; 
import Link from "next/link";

export default function Home() {
  return (
 <div className="p-6 space-y-12">

   <Link href="/Me">
  <button className="px-4 py-2 bg-black text-white rounded-full mb-4">
    Back
  </button>
  </Link>

 
  <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center gap-6">
    <img src="/8.3.jpg" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/tra.jpg" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/trav.jpg" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/9.1.jpg" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/4.2.jpg" className="w-40 h-40 object-cover rounded-lg" />
  </div>

  <p className="text-center text-gray-700">
    Escape to where nature heals and peace finds you.
  </p>

 
  <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center gap-6">
    <img src="/7.2.jpg" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/7.6.jpg" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/1.1.jpg" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/1.2.jpg" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/bee.PNG" className="w-40 h-40 object-cover rounded-lg" />
  </div>

  <p className="text-center text-gray-700">
    Go where every journey adds a new color to your story.
  </p>


  <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center gap-6">
    <img src="/yes.PNG" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/tr.PNG" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/mealbay.jpg" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/mayon.jpg" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/2.1.jpg" className="w-40 h-40 object-cover rounded-lg" />
  </div>

  <p className="text-center text-gray-700">
    Isn’t it pretty to travel and see life in a brighter shade?
  </p>

</div>

  )
}