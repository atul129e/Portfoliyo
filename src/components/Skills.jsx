function Skills() {
  const skills = [
    {
      name: "HTML",
      title: "HTML5",
      description: "Building semantic, accessible and well-structured web pages.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      title: "CSS3",
      description: "Creating responsive layouts and clean modern interfaces.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      title: "JavaScript",
      description: "Adding logic, interaction and dynamic functionality to websites.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      title: "React",
      description: "Building reusable components and modern interactive applications.",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-cover bg-center text-slate-950 px-6 md:px-12 lg:px-20 py-24 flex items-center"
      style={{
        backgroundImage: "url('/portfolio-bg-other.png')",
      }}
    >
      <div className="max-w-7xl mx-auto w-full">

        <div className="text-center mb-16">
          <p className="text-slate-500 font-medium text-lg tracking-wide">
            What I Work With
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            My Skills
          </h2>

          <div className="w-20 h-1 bg-slate-900 mx-auto mt-5 rounded-full"></div>

          <p className="text-slate-600 max-w-2xl mx-auto mt-5 text-lg leading-relaxed">
            Technologies I use to build responsive, interactive and
            modern web experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-white/75 backdrop-blur-md border border-slate-300 rounded-2xl p-7 md:p-8 hover:border-slate-800 hover:-translate-y-2 hover:shadow-2xl transition-all duration-400 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-900 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="text-sm font-medium text-slate-400">
                    0{index + 1}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">
                    {skill.title}
                  </h3>
                </div>

                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-slate-50 border border-slate-200 group-hover:bg-white group-hover:scale-110 transition-all duration-400">
                  <img
                    src={skill.logo}
                    alt={`${skill.title} logo`}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  />
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mt-7 max-w-md">
                {skill.description}
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="w-8 h-px bg-slate-900 group-hover:w-14 transition-all duration-500"></span>

                <span className="text-sm font-medium text-slate-500">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;