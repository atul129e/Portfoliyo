import { useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-slate-950/85 backdrop-blur-xl text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">

        <a
          href="#home"
          onClick={handleClick}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl border border-slate-600 flex items-center justify-center font-bold text-lg text-white group-hover:bg-[#D97757] group-hover:text-white group-hover:border-[#D97757] transition-all duration-300">
            AJ
          </div>

          <div className="hidden sm:block">
            <span className="text-lg font-semibold tracking-tight">
              Atul Jadon
            </span>

            <span className="block text-[10px] text-slate-500 uppercase tracking-[0.25em]">
              Frontend Developer
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm text-slate-400 hover:text-[#D97757] transition-colors duration-300 py-2 group"
            >
              {link.name}

              <span className="absolute left-0 bottom-0 w-full h-px bg-[#D97757] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 rounded-lg border border-slate-700 flex flex-col items-center justify-center gap-1.5 hover:border-[#D97757] transition-all duration-300"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-px bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>

          <span
            className={`w-5 h-px bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>

          <span
            className={`w-5 h-px bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-t border-white/10" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 bg-slate-950/95">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleClick}
              className="block py-3 text-slate-400 hover:text-[#D97757] border-b border-slate-900 last:border-0 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
