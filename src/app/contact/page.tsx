import Image from "next/image"; 
import Link from "next/link";

export default function Home() {
  return (
<div className=" fixed top-30 right-150 text-center">
      <h1 id="title" className="text-3xl font-bold">
       Contact me
      </h1>

<h1
        id="body"
        className="text-sm  fixed top-40 right-85 text-center"
      >
        Email: hblanco@gbox.ncf.edu.ph
      </h1>
      <h1
        id="body"
        className="text-sm  fixed top-43 right-85 text-center"
      >
        Phone: 09682025096
      </h1>
       <h1
        id="body"
        className="text-sm  fixed top-46 right-85 text-center"
      >
        Social Media: Facebook - Hialeah Blanco
      </h1>

</div>
  );
}