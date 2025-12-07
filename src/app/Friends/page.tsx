import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  
       <div className="p-6 space-y-12">

          <Link href="/about">
           <button className="px-5 py-2 bg-black text-white rounded-full">
           Back
           </button>
           </Link>


  <div className="bg-gray-100 p-6 rounded-xl flex justify-center gap-6">
    <img src="/cam.jpg" className="w-40 h-28 object-cover rounded-lg" />
    <img src="/bd.jpg" className="w-40 h-28 object-cover rounded-lg" />
    <img src="/high.jpg" className="w-40 h-28 object-cover rounded-lg" />
    <img src="/shs.jpg" className="w-40 h-28 object-cover rounded-lg" />
    <img src="/frendd.jpg" className="w-40 h-28 object-cover rounded-lg" />
  </div>

 
  <div className="bg-gray-100 p-6 rounded-xl flex justify-center gap-6">
    <img src="/hap.jpg" className="w-40 h-28 object-cover rounded-lg" />
    <img src="/pasa.jpg" className="w-40 h-28 object-cover rounded-lg" />
    <img src="/boy.jpg" className="w-40 h-28 object-cover rounded-lg" />
    <img src="/far.jpg" className="w-40 h-28 object-cover rounded-lg" />
    <img src="/swim.jpg" className="w-40 h-28 object-cover rounded-lg" />
  </div>


  <p className="max-w-4xl mx-auto text-center text-gray-800 leading-relaxed text-[17px]">
    In senior high school, I met friends who became more than just classmates they became my
    family. They treated me like their own sister, supported me without being asked, and believed in me
    even when I doubted myself. With them, I found comfort in the simplest moments: traveling
    together, sharing deep talks, and partying in karaoke rooms where our laughter
    felt endless. They make me happy effortlessly, the kind of people I can cry with, laugh with,
    and open my heart without fear of judgment. Our friendship grew into something I can’t
    imagine losing, something real, rare, and deeply loved. They are my lifetime best friends,
    and I’ll treasure them forever.
  </p>

  
  <div className="bg-gray-100 p-6 rounded-xl flex justify-center gap-6">
    <img src="/bff.jpg" className="w-40 h-28 object-cover rounded-lg" />
    <img src="/albay.jpg" className="w-40 h-28 object-cover rounded-lg" />
    <img src="/fam.jpg" className="w-40 h-28 object-cover rounded-lg" />
    <img src="/leg.jpg" className="w-40 h-28 object-cover rounded-lg" />
    <img src="/tanim.jpg" className="w-40 h-28 object-cover rounded-lg" />
  </div>


  <div className="bg-gray-100 p-6 rounded-xl flex justify-center gap-6">
    <img src="/fren.jpg" className="w-40 h-28 object-cover rounded-lg" />
    <img src="/plant.jpg" className="w-40 h-28 object-cover rounded-lg" />
    <img src="/bbk.jpg" className="w-40 h-28 object-cover rounded-lg" />
    <img src="/col.jpg" className="w-40 h-28 object-cover rounded-lg" />
    <img src="/one.jpg" className="w-40 h-28 object-cover rounded-lg" />
  </div>


  <p className="max-w-4xl mx-auto text-center text-gray-800 leading-relaxed text-[17px]">
    In college, I met friends who instantly felt like the kind of people I could trust without
    hesitation. They were always ready to help me with anything big or small and somehow, they
    always knew when I needed support even before I said a word. We went through every challenge
    side by side, laughing through stress, sharing notes, walking to classes together, and
    turning ordinary days into something special. They never left me behind; instead, they went
    along with me in everything, turning college into a place where I felt understood, supported,
    and never alone. With them, I found not just friends, but someone I can rely on
    every day.
  </p>

</div>

  )
}