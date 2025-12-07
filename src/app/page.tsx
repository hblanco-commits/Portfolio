import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-black font-sans min-h-screen">

      <header className="w-full text-center py-10">
        <h1 className="text-5xl font-bold tracking-tight">
          WHAT’S MY STORY?
        </h1>
      </header>

      <section className="flex justify-center px-4">
        <div
          className="relative w-full max-w-6xl overflow-hidden rounded-xl shadow-md"
          style={{ aspectRatio: "16/7" }}
        >
          <Image
            src="/7.5.jpg"
            alt="Story Image"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>
      </section>

  
      <div className="text-center mt-6 tracking-[0.4em] text-xl font-medium">
        H I A L E A H
      </div>

      <div className="flex justify-center mt-8 mb-16">
    <Link href="/about">
      <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-neutral-800 transition">
        Show Me!
      </button>
    </Link>
  </div>

</main>
  );
}