import { useParams, Link } from "react-router-dom";
import { endpoints } from "../data/endpoints";
import ReactMarkdown from "react-markdown";

export default function EndpointDetail() {
  const { id } = useParams();

  // Konversi id dari string ke number untuk mencocokkan endpoint
  const endpoint = endpoints.find((e) => e.id === parseInt(id, 10));

  if (!endpoint)
    return (
      <div className="p-6 max-w-3xl mx-auto text-center text-red-600 font-medium">
        ❌ Endpoint tidak ditemukan.
      </div>
    );

  return (
    <div className="p-6 max-w-4xl mx-auto text-white">
      <Link
        to="/"
        className="text-teal-400 hover:underline mb-4 inline-block transition duration-300"
      >
        ← Kembali ke halaman utama
      </Link>

      <h1 className="text-black text-3xl font-bold mb-2">{endpoint.name}</h1>
      <p className="mb-4 text-gray-300">{endpoint.description}</p>

      <img
        src={endpoint.image}
        alt={endpoint.name}
        className="w-full rounded-xl shadow-2xl mb-6 max-h-[400px] object-cover"
      />

      <div className="text-black prose prose-invert max-w-none bg-white/10 p-6 rounded-xl shadow-md">
        <ReactMarkdown>
          {endpoint.markdown ||
            "_Belum ada dokumentasi lebih lanjut untuk endpoint ini._"}
        </ReactMarkdown>
      </div>
    </div>
  );
}
