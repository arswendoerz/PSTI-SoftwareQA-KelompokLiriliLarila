import Navbar from "../components/Navbar";
import { motion as Motion } from "framer-motion";
import { MdGroups } from "react-icons/md";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-poppins">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-center px-6 py-24 bg-cover bg-center bg-gradient-to-br from-blue-950 via-teal-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />
        <Motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Welcome to <span className="text-teal-400">API Explorer</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 mb-8">
            Jelajahi dokumentasi dan hasil pengujian API kami dengan tampilan
            yang informatif dan user-friendly.
          </p>
          <a
            href="#features"
            className="bg-teal-500 hover:bg-teal-400 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            Lihat Fitur
          </a>
        </Motion.div>
      </section>

      {/* Fitur-fitur */}
      <section
        id="features"
        className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950"
      >
        <div className="max-w-6xl mx-auto text-center">
          <Motion.h2
            className="text-3xl sm:text-4xl font-bold mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Fitur Utama Platform Kami
          </Motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "Real-Time API Testing",
                desc: "Lihat hasil pengujian langsung dari endpoint API yang tersedia.",
              },
              {
                title: "Tampilan Bersih & Responsive",
                desc: "Dirancang agar nyaman digunakan di berbagai perangkat.",
              },
              {
                title: "Integrasi Frontend & Backend",
                desc: "Dokumentasi menyeluruh dari sisi pengguna dan server.",
              },
              {
                title: "Searchable Endpoint",
                desc: "Cari endpoint dengan mudah berdasarkan nama atau deskripsi.",
              },
              {
                title: "Link ke GitHub",
                desc: "Open-source project yang bisa kamu eksplor dan kontribusi.",
              },
              {
                title: "Tim Developer Andal",
                desc: "Dikembangkan oleh tim berpengalaman dari berbagai bidang.",
              },
            ].map((feat, i) => (
              <Motion.div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-2 text-teal-300">
                  {feat.title}
                </h3>
                <p className="text-sm text-slate-300">{feat.desc}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tim Developer */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 flex items-center gap-3 justify-center">
            <MdGroups className="text-teal-400 text-4xl" />
            Tentang Tim Developer
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { name: "Ghebi Armando", role: "Software Tester API Endpoint" },
              {
                name: "Arswendo Erza Sadewa",
                role: "Software Tester Functionality & Performance",
              },
              {
                name: "Melda Frestiana",
                role: "Software Tester UI & Functionality",
              },
              {
                name: "Ikhwan Fajar Khatami",
                role: "Software Tester UI & Functionality",
              },
            ].map((dev, idx) => (
              <Motion.div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md shadow-lg hover:scale-105 transition-transform"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-1 text-teal-400">
                  {dev.name}
                </h3>
                <p className="text-sm text-slate-300">{dev.role}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
