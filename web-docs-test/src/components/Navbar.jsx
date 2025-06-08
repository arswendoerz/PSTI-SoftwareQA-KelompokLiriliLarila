import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Frontend", to: "/frontend" },
    { name: "Backend", to: "/backend" },
    {
      name: "GitHub",
      href: "https://github.com/arswendoerz/PSTI-SoftwareQA-KelompokLiriliLarila/tree/main",
      external: true,
    },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-gradient-to-r from-black/80 via-slate-900/80 to-black/90 shadow-md backdrop-blur-sm px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="inline-block text-white text-xl font-bold animate-[slide_6s_linear_infinite_alternate]">
          Lirili Larila
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-white font-medium text-sm sm:text-base">
          {navItems.map((item, idx) =>
            item.external ? (
              <li key={idx}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 transition"
                >
                  {item.name}
                </a>
              </li>
            ) : (
              <li key={idx}>
                <Link to={item.to} className="hover:text-teal-300 transition">
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-black/90 rounded-lg py-2 px-4">
          <ul className="flex flex-col space-y-2 text-white">
            {navItems.map((item, idx) =>
              item.external ? (
                <li key={idx}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-1 px-2 rounded hover:bg-teal-600/30 transition"
                  >
                    {item.name}
                  </a>
                </li>
              ) : (
                <li key={idx}>
                  <Link
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className="block py-1 px-2 rounded hover:bg-teal-600/30 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
