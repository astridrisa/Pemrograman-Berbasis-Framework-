import type { Metadata } from "next";
import { BookOpenIcon, UserIcon, QrCodeIcon, LightBulbIcon } from "@heroicons/react/24/outline";



export const metadata: Metadata = {
  title: "Esai",
  description: "Halaman kumpulan esai.",
  openGraph: {
    title: "Esai",
    description: "Halaman kumpulan esai.",
  },
};

// export default function Essays() {
//   return (
//     <div className="mt-16 px-8">
//       <header>
//         <h1 className="font-bold text-4xl text-zinc-800">Esai</h1>
//       </header>
//     </div>
//   );
// }

export default function Essays() {
  const articles = [
    { title: "Belajar UI/UX", date: "10 Januari 2024", url: "/essays/uiux" },
    { title: "Pentingnya Frontend", date: "15 Februari 2024", url: "/essays/frontend" },
    { title: "Menggunakan Tailwind CSS", date: "5 Maret 2024", url: "/essays/tailwind" },
  ];

  return (
    <div className="mt-16 px-8">
      <header className="text-center">
        <h1 className="font-bold text-5xl text-zinc-800">📖 Esai Saya</h1>
        <p className="text-lg mt-4 text-zinc-600">
          Berikut adalah beberapa artikel dan esai yang telah saya tulis tentang teknologi dan desain.
        </p>
      </header>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.url}
            className="block p-6 bg-white rounded-lg shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:bg-gray-100"
          >
            <div className="flex items-center gap-3">
              <BookOpenIcon className="w-6 h-6 text-teal-500" />
              <h2 className="text-xl font-semibold text-zinc-800">{article.title}</h2>
            </div>
            <p className="text-sm text-zinc-500 mt-2">{article.date}</p>
          </a>
        ))}
      </div>
    </div>
  );
}