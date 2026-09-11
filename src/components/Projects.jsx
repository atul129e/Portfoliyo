import { useState } from "react";

function Projects() {
  const images = [
    "/image6.png",
    "/image2.png",
    "/image3.png",
    "/image4.png",
    "/image5.png",
  ];

  const [activeImage, setActiveImage] = useState(0);

  return (
    <section
      id="projects"
      className="min-h-screen text-slate-900 px-6 md:px-12 lg:px-20 py-24 bg-cover bg-center"
      style={{
        backgroundImage: "url('/portfolio-bg-other.png')",
      }}
    >
      <div className="max-w-6xl mx-auto">

        <div className="mb-14">
          <p className="text-slate-600 text-sm mb-2 tracking-widest uppercase">
            My Work
          </p>

          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Projects
              </h2>

              <div className="w-16 h-1 bg-slate-800 mt-4 rounded-full"></div>
            </div>

            <span className="hidden sm:block text-slate-600 text-sm">
              01 / Featured
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">

          <div className="w-full">

            <div className="relative rounded-2xl border border-slate-300 bg-white/80 p-3 shadow-2xl backdrop-blur-sm">

              <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-800"></span>
                <span className="text-xs text-slate-500">
                  Winter Habit Tracker
                </span>
              </div>

              <div className="overflow-hidden rounded-xl bg-slate-950">
                <img
                  src={images[activeImage]}
                  alt={`Winter Habit Tracker screenshot ${activeImage + 1}`}
                  className="w-full h-72 sm:h-96 lg:h-105 object-contain transition-all duration-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2 mt-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative overflow-hidden rounded-lg border transition-all duration-300 ${
                    activeImage === index
                      ? "border-slate-900 scale-[1.03]"
                      : "border-slate-300 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-14 sm:h-16 object-cover"
                  />

                  <span
                    className={`absolute bottom-1 right-1 text-[10px] ${
                      activeImage === index
                        ? "text-white"
                        : "text-slate-700"
                    }`}
                  >
                    0{index + 1}
                  </span>
                </button>
              ))}
            </div>

            <p className="text-slate-600 text-xs mt-3">
              Select a preview to explore the project
            </p>
          </div>

          <div className="max-w-xl">

            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-slate-700"></span>

              <p className="text-slate-600 text-sm uppercase tracking-widest">
                React Project
              </p>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-5 text-slate-900">
              Winter Habit Tracker
            </h3>

            <p className="text-slate-700 leading-7 mb-8">
              A focused habit tracking application designed to help users
              build consistency throughout the winter season. Users can
              create personal goals, complete them every day and monitor
              their progress over time.
            </p>

            <div className="mb-8">

              <h4 className="text-sm uppercase tracking-widest text-slate-600 mb-4">
                What it does
              </h4>

              <div className="space-y-3">

                <div className="flex items-center gap-4 border-b border-slate-300 pb-3">
                  <span className="text-slate-500 text-xs">01</span>
                  <span className="text-slate-800 text-sm">
                    Create and manage daily goals
                  </span>
                </div>

                <div className="flex items-center gap-4 border-b border-slate-300 pb-3">
                  <span className="text-slate-500 text-xs">02</span>
                  <span className="text-slate-800 text-sm">
                    Track completed days and streaks
                  </span>
                </div>

                <div className="flex items-center gap-4 border-b border-slate-300 pb-3">
                  <span className="text-slate-500 text-xs">03</span>
                  <span className="text-slate-800 text-sm">
                    September to February calendar
                  </span>
                </div>

                <div className="flex items-center gap-4 border-b border-slate-300 pb-3">
                  <span className="text-slate-500 text-xs">04</span>
                  <span className="text-slate-800 text-sm">
                    Custom goal categories
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-slate-500 text-xs">05</span>
                  <span className="text-slate-800 text-sm">
                    Progress tracking and reports
                  </span>
                </div>

              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-9">

              <span className="px-4 py-2 rounded-full border border-slate-400 bg-white/70 text-slate-800 text-xs hover:border-slate-700 hover:bg-white transition">
                React
              </span>

              <span className="px-4 py-2 rounded-full border border-slate-400 bg-white/70 text-slate-800 text-xs hover:border-slate-700 hover:bg-white transition">
                JavaScript
              </span>

              <span className="px-4 py-2 rounded-full border border-slate-400 bg-white/70 text-slate-800 text-xs hover:border-slate-700 hover:bg-white transition">
                Tailwind CSS
              </span>

            </div>

            <div className="flex items-center gap-7">

              <a
                href="https://habit-converter.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-slate-900 text-white px-5 py-3 rounded-lg font-medium text-sm hover:bg-slate-700 transition-all duration-300"
              >
                Live Demo
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>
              </a>

              <a
                href="https://github.com/atul129e/Habit-Converter"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-slate-700 hover:text-slate-950 text-sm transition"
              >
                View Code
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;