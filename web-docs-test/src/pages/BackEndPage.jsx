import { useState } from "react";
import Navbar from "../components/Navbar";
import { endpoints } from "../data/endpoints";
import EndpointCard from "../components/EndpointCard";
import { motion as Motion } from "framer-motion";

export default function BackendPage() {
  const [query, setQuery] = useState("");

  const backendEndpoints = endpoints.filter(
    (endpoint) =>
      (endpoint.category === "backend" ||
        endpoint.name.toLowerCase().includes("backend")) &&
      (endpoint.name.toLowerCase().includes(query.toLowerCase()) ||
        endpoint.description.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white font-poppins">
      <Navbar />

      {/* Hero Section Backend */}
      <section className="py-28 text-center px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-teal-400">
            Dokumentasi API Backend 🚀
          </h1>
          <p className="text-lg sm:text-xl text-slate-300">
            Telusuri berbagai endpoint backend yang telah kami uji dan
            dokumentasikan secara lengkap.
          </p>
        </Motion.div>
      </section>

      {/* Search Input */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="🔍 Cari endpoint backend..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-2/3 lg:w-1/2 px-6 py-3 rounded-full border border-teal-400 shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-500/40 bg-white/90 text-gray-800 placeholder-gray-500 transition duration-300 transform hover:scale-105 backdrop-blur-md"
          />
        </div>

        {/* Endpoint Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {backendEndpoints.length > 0 ? (
            backendEndpoints.map((endpoint) => (
              <Motion.div
                key={endpoint.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <EndpointCard endpoint={endpoint} />
              </Motion.div>
            ))
          ) : (
            <p className="text-white text-center col-span-full text-lg">
              ❌ Tidak ada dokumentasi backend yang ditemukan.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
