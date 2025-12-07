import Image from "next/image"; 
import Link from "next/link";

export default function CdcPage() {
  return (
   
    <div className="p-6 space-y-10">

      <Link href="Me">
      <button className="px-4 py-2 bg-black text-white rounded-full">
         Back
        </button>
      </Link>

  
  <div className="bg-gray-100 p-6 rounded-xl flex justify-center gap-6">
    <img src="/GradPic.JPG" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/graduate.jpg" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/nor.jpg" className="w-40 h-40 object-cover rounded-lg" />
  </div>


  <div className="bg-gray-100 p-6 rounded-xl flex justify-center gap-6">
    <img src="/award.jpg" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/epek.jpg" className="w-40 h-40 object-cover rounded-lg" />
    <img src="/with.jpg" className="w-40 h-40 object-cover rounded-lg" />
  </div>


  <p className="max-w-3xl mx-auto text-center leading-relaxed text-gray-800">
    I graduated from Senior High School with academic distinction, but to me it’s more
    than just an award, it’s my way of giving back to my parents who worked hard to 
    support us. A reminder to my fellow Sports Track students that we are not just 
    athletes but hardworking learners who can excel academically, a proof to those who 
    doubted me that I can balance my extra curricular, responsibilities, and my studies,
    and a proud moment knowing that the motivation I left behind now inspires others as
    I set a record of Top 1 in the entire Sports Track in my Senior High School year.
  </p>

</div>
  );
}