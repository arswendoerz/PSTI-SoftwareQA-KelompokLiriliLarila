import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function EndpointCard({ endpoint }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/endpoint/${endpoint.id}`}
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
      </div>
    </Link>
  );
}
