function About() {
return (
<section
id="about"
className="min-h-screen bg-cover bg-center text-slate-950 px-6 md:px-12 lg:px-20 py-24 flex items-center"
style={{
backgroundImage: "url('/portfolio-bg-other.png')",
}}
> <div className="max-w-7xl mx-auto w-full">

```
    <div className="text-center mb-16">
      <p className="text-slate-500 font-medium text-lg tracking-wide">
        Get To Know Me
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-2">
        About Me
      </h2>

      <div className="w-20 h-1 bg-slate-900 mx-auto mt-5 rounded-full"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

      <div className="flex justify-center">

        <div className="relative w-full max-w-md">

          <div className="absolute -top-5 -left-5 w-20 h-20 border-l-2 border-t-2 border-slate-400"></div>

          <div className="absolute -bottom-5 -right-5 w-20 h-20 border-r-2 border-b-2 border-slate-400"></div>

          <div className="relative bg-white/75 backdrop-blur-md border border-slate-300 rounded-3xl p-7 shadow-2xl hover:-translate-y-2 transition-all duration-500">

            <div className="flex items-center justify-between mb-8">
              <span className="text-sm font-medium text-slate-500">
                Developer Profile
              </span>

              <span className="flex items-center gap-2 text-sm text-slate-600">
                <span className="w-2.5 h-2.5 bg-slate-900 rounded-full"></span>
                Learning
              </span>
            </div>

            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/80">

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xl font-bold">
                  AJ
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Atul Jadon
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    Frontend Developer
                  </p>
                </div>
              </div>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-5">

              <div className="border border-slate-200 rounded-2xl p-4 bg-white">
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Focus
                </p>

                <p className="font-semibold text-slate-800 mt-2">
                  Web Development
                </p>
              </div>

              <div className="border border-slate-200 rounded-2xl p-4 bg-white">
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Stack
                </p>

                <p className="font-semibold text-slate-800 mt-2">
                  React & JavaScript
                </p>
              </div>

            </div>

            <div className="mt-5 rounded-2xl bg-slate-900 text-white p-5">
              <p className="text-sm text-slate-400">
                Current mindset
              </p>

              <p className="text-lg font-semibold mt-2">
                Learn. Build. Improve.
              </p>

              <div className="flex gap-2 mt-4">
                <span className="h-1.5 w-12 rounded-full bg-white"></span>
                <span className="h-1.5 w-8 rounded-full bg-slate-500"></span>
                <span className="h-1.5 w-5 rounded-full bg-slate-700"></span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div>

        <p className="text-slate-500 text-sm uppercase tracking-[0.2em] font-semibold mb-3">
          A little about me
        </p>

        <h3 className="text-3xl md:text-4xl font-bold leading-tight text-slate-950">
          Turning ideas into clean and engaging web experiences.
        </h3>

        <p className="text-slate-600 text-lg leading-relaxed mt-6">
          I'm a BCA student and a passionate frontend developer
          who enjoys creating modern, responsive and user-friendly
          websites.
        </p>

        <p className="text-slate-600 text-lg leading-relaxed mt-5">
          I enjoy learning new technologies, experimenting with
          designs and turning ideas into real projects. My goal is
          to keep improving my development skills while building
          web experiences that are simple, useful and enjoyable.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mt-8">

          <div className="bg-white/70 border border-slate-300 rounded-xl p-5 text-center hover:border-slate-800 hover:-translate-y-1 transition-all duration-300">
            <div className="text-2xl mb-3">🎓</div>

            <h4 className="font-semibold text-slate-900">
              BCA Student
            </h4>

            <p className="text-sm text-slate-500 mt-2">
              Learning & growing
            </p>
          </div>

          <div className="bg-white/70 border border-slate-300 rounded-xl p-5 text-center hover:border-slate-800 hover:-translate-y-1 transition-all duration-300">
            <div className="text-2xl mb-3">💻</div>

            <h4 className="font-semibold text-slate-900">
              Frontend Developer
            </h4>

            <p className="text-sm text-slate-500 mt-2">
              Building for web
            </p>
          </div>

          <div className="bg-white/70 border border-slate-300 rounded-xl p-5 text-center hover:border-slate-800 hover:-translate-y-1 transition-all duration-300">
            <div className="text-2xl mb-3">🚀</div>

            <h4 className="font-semibold text-slate-900">
              Always Learning
            </h4>

            <p className="text-sm text-slate-500 mt-2">
              One project at a time
            </p>
          </div>

        </div>

      </div>

    </div>
  </div>
</section>

);
}

export default About;
