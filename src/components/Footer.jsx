function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14">

        <div className="flex flex-col md:flex-row justify-between gap-12">

          <div className="max-w-md">
            <h2 className="text-3xl font-semibold mb-3">
              Atul Jadon
            </h2>

            <p className="text-orange-400 mb-5">
              Frontend Developer & BCA Student
            </p>

            <p className="text-slate-400 leading-7">
              I build clean, responsive and meaningful web experiences.
            </p>
          </div>

          <div className="md:pr-16">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-5">
              Quick Links
            </h3>

<nav className="grid grid-cols-2 gap-x-8 gap-y-3">              <a
                href="#home"
                className="text-slate-400 hover:text-orange-400 transition-colors duration-300"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-slate-400 hover:text-orange-400 transition-colors duration-300"
              >
                About
              </a>

              <a
                href="#skills"
                className="text-slate-400 hover:text-orange-400 transition-colors duration-300"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="text-slate-400 hover:text-orange-400 transition-colors duration-300"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="text-slate-400 hover:text-orange-400 transition-colors duration-300"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <p className="text-sm text-slate-500 uppercase tracking-wider mb-4">
            Skills
          </p>

          <p className="text-slate-400">
            HTML <span className="text-slate-600">·</span>{" "}
            CSS <span className="text-slate-600">·</span>{" "}
            JavaScript <span className="text-slate-600">·</span>{" "}
            React <span className="text-slate-600">·</span>{" "}
            C
          </p>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-5">

          <div className="flex items-center gap-6">

            <a
              href="https://github.com/atul129e"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.1c-3.19.69-3.86-1.35-3.86-1.35-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/atul-jadon-893441378/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.68H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0-4.14ZM3.56 20.45h3.56V8.99H3.56v11.46ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0Z" />
              </svg>
              <span>LinkedIn</span>
            </a>

           <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=atuljadon129e@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Email"
  className="flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-5 h-5"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
  <span>Email</span>
</a>
             

          </div>

          <p className="text-sm text-slate-500">
            © 2026 Atul Jadon. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;