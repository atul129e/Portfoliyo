function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-cover bg-center text-slate-950 flex items-center px-6 md:px-12 lg:px-20 py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/portfolio-bg-Home.png')",
      }}
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

        <div className="relative z-10">

          <p className="text-slate-600 text-lg font-medium mb-3">
            Hi, I'm
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Atul Jadon
          </h1>

          <div className="flex items-center gap-3 mt-4">
            <span className="w-10 h-0.5 bg-slate-900"></span>

            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700">
              Frontend Developer
            </h2>
          </div>

          <p className="text-slate-600 text-lg leading-relaxed mt-6 max-w-xl">
            I build clean, responsive and engaging web experiences
            using HTML, CSS, JavaScript and React.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-700 transition-all duration-300 font-semibold shadow-lg"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-slate-800 text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 font-semibold"
            >
              Let's Talk
            </a>
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            <span className="px-4 py-2 rounded-full border border-slate-300 bg-white/60 text-slate-700 text-sm font-medium hover:border-slate-800 hover:-translate-y-1 transition-all duration-300">
              HTML
            </span>

            <span className="px-4 py-2 rounded-full border border-slate-300 bg-white/60 text-slate-700 text-sm font-medium hover:border-slate-800 hover:-translate-y-1 transition-all duration-300">
              CSS
            </span>

            <span className="px-4 py-2 rounded-full border border-slate-300 bg-white/60 text-slate-700 text-sm font-medium hover:border-slate-800 hover:-translate-y-1 transition-all duration-300">
              JavaScript
            </span>

            <span className="px-4 py-2 rounded-full border border-slate-300 bg-white/60 text-slate-700 text-sm font-medium hover:border-slate-800 hover:-translate-y-1 transition-all duration-300">
              React
            </span>
          </div>
        </div>

        <div className="relative flex items-center justify-center md:justify-end min-h-105">

          <div className="absolute w-82.5 h-82.5 md:w-102.5 md:h-102,.5 rounded-full border border-dashed border-slate-400/70 animate-[spin_18s_linear_infinite]"></div>

          <div className="absolute w-75  h-75 md:w-95 md:h-95 rounded-full border border-slate-300/80"></div>

          <span className="absolute top-8 right-16 md:right-8 w-3 h-3 bg-slate-800 rounded-full"></span>

          <span className="absolute bottom-12 left-12 md:left-8 w-2 h-2 bg-slate-500 rounded-full"></span>

          <span className="absolute top-24 left-10 md:left-4 w-2 h-2 bg-slate-400 rounded-full"></span>

          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-87.5 lg:h-87.5 rounded-full p-2 bg-white/70 border border-slate-300 shadow-2xl">

            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-900">

              <img
                src="/image3.jpeg"
                alt="Atul Jadon"
                className="block w-full h-full object-cover grayscale-35 hover:grayscale-0 hover:scale-105 transition-all duration-700"
              />

            </div>
          </div>

          <div className="absolute -bottom-2 right-4 md:right-0 bg-slate-900 text-white px-5 py-2.5 rounded-full shadow-xl text-sm font-medium">
            Frontend Developer
          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;