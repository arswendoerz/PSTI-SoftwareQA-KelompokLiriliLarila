import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaTable } from "react-icons/fa";

export default function EndpointCard({ endpoint }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/endpoint/${endpoint.id}`} // <-- navigasi ke halaman detail endpoint
      className="relative group block transition-transform duration-300 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl h-full flex flex-col justify-between">
        <div>
          <div className="relative">
            <img
              src={endpoint.image}
              alt={endpoint.name}
              className="w-full h-44 object-cover"
            />
            {isHovered && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 flex items-end p-4">
                <ArrowRight className="text-white w-6 h-6 animate-pulse" />
              </div>
            )}
          </div>
          <div className="p-4 flex flex-col min-h-[110px]">
            <h2 className="font-semibold text-lg text-gray-800 group-hover:text-teal-600 transition-colors duration-300 mb-1">
              {endpoint.name}
            </h2>
            <p className="text-sm text-gray-600 line-clamp-3">
              {endpoint.description}
            </p>
          </div>
        </div>

        {/* Link Aksi */}
        <div className="flex gap-3 p-4 pt-0">
          {endpoint.spreadsheetUrl && (
            <a
              href={endpoint.spreadsheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // mencegah navigasi saat klik link
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
            >
              <FaTable className="w-4 h-4" />
              Spreadsheet
            </a>
          )}
          {endpoint.githubUrl && (
            <a
              href={endpoint.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </Link>
  );
}
