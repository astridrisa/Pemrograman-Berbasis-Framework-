import Image from "next/image";
import type { Metadata } from "next";
import { QrCodeIcon, LightBulbIcon, UserIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Tentang Saya",
  description: "Halaman tentang saya.",
  openGraph: {
    title: "Tentang Saya",
    description: "Halaman tentang saya.",
  },
};

export default function Home() {
  return (
    <div className="mt-16 px-8">
      <header className="text-center">
        <h1 className="font-bold text-4xl text-zinc-800">Tentang Saya</h1>
        <p className="text-base mt-4 text-zinc-600 max-w-2xl mx-auto">
          Saya adalah seorang UI/UX Designer dan Frontend Developer dengan pengalaman dalam membangun tampilan aplikasi yang menarik dan fungsional.
        </p>
      </header>

      {/* Foto Profil */}
      <div className="mt-10 flex justify-center">
        <Image
          src="/images/profile.jpg" 
          width={150}
          height={150}
          alt="Foto Profil"
          className="rounded-full shadow-lg"
        />
      </div>

      {/* Keahlian */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-zinc-800 text-center">Keahlian</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-center">
          <div className="p-4 rounded-lg bg-gray-100 shadow-md">
            <UserIcon className="w-10 h-10 text-teal-500 mx-auto" />
            <p className="mt-2 font-medium text-zinc-700">UI/UX Design</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-100 shadow-md">
            <QrCodeIcon className="w-10 h-10 text-teal-500 mx-auto" />
            <p className="mt-2 font-medium text-zinc-700">Frontend Development</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-100 shadow-md">
            <LightBulbIcon className="w-10 h-10 text-teal-500 mx-auto" />
            <p className="mt-2 font-medium text-zinc-700">Problem Solving</p>
          </div>
        </div>
      </div>

      {/* Sosial Media */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-zinc-800">Temui Saya</h2>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/astrdrisa" className="text-teal-500 hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/astrid-risa-widiana-b6a8811a3/" className="text-teal-500 hover:underline">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}