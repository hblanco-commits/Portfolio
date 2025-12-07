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
    <img src="/may.jpg" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/trop.jpg" className="w-40 h-40 object-cover rounded-lg" />
    
  </div>

  <p className="text-center text-gray-700">
      3D FEST CDC
  </p>


  <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center gap-6">
    <img src="/taas.jpg" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/fly.jpg" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/cheeer.jpg" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/start.jpg" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/stunt.jpg" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/grand.jpg" className="w-40 h-40 object-cover rounded-lg" />
     
  </div>

  <p className="text-center text-gray-700">
   BUCAL CDC
  </p>

 
  <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center gap-6">
    <img src="/ncf.jpg" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/heel.jpg" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/milo.jpg" className="w-40 h-40 object-cover rounded-lg" />
  </div>

  <p className="text-center text-gray-700">
    MILO CDC
 </p>
</div>

  );
}