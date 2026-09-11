import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const data = {
      access_key: "122564e4-a470-4cc2-b395-b616a48d7c55",
      subject: "New Portfolio Contact Message",
      from_name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen text-slate-900 px-6 md:px-12 lg:px-20 py-24 flex items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/portfolio-bg-other.png')",
      }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <p className="text-slate-600 font-medium text-sm uppercase tracking-widest">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight text-slate-900">
            Let's Connect
          </h2>

          <div className="w-16 h-1 bg-slate-800 mx-auto mt-5 rounded-full"></div>

          <p className="text-slate-700 max-w-2xl mx-auto mt-5 leading-relaxed">
            Have a project, idea or opportunity? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative bg-white/85 border border-slate-300 rounded-2xl p-8 md:p-10 overflow-hidden shadow-xl backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-24 h-1 bg-slate-800"></div>

            <div className="flex items-center gap-3 mb-7">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>

              <p className="text-sm text-slate-600 uppercase tracking-widest">
                Available for
              </p>
            </div>

            <h3 className="text-3xl font-bold mb-5 text-slate-900">
              Let's build something useful.
            </h3>

            <p className="text-slate-700 leading-7 mb-9">
              I'm interested in building modern websites, working on
              creative projects and connecting with people who enjoy
              creating useful digital experiences.
            </p>

            <div className="space-y-4">
              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=atuljadon129e@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-4 p-4 rounded-xl border border-slate-300 bg-white/70 hover:border-slate-500 hover:bg-white transition-all duration-300"
>
                <div className="w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                  @
                </div>

                <div>
                  <p className="text-xs text-slate-500 mb-1">
                    Email
                  </p>

                  <p className="text-sm font-medium text-slate-800">
                    atuljadon129e@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/atul129e"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border border-slate-300 bg-white/70 hover:border-slate-500 hover:bg-white transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                  GH
                </div>

                <div>
                  <p className="text-xs text-slate-500 mb-1">
                    GitHub
                  </p>

                  <p className="text-sm font-medium text-slate-800">
                    github.com/atul129e
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/atul-jadon-893441378/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border border-slate-300 bg-white/70 hover:border-slate-500 hover:bg-white transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                  in
                </div>

                <div>
                  <p className="text-xs text-slate-500 mb-1">
                    LinkedIn
                  </p>

                  <p className="text-sm font-medium text-slate-800">
                    linkedin.com/in/atul-jadon
                  </p>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white text-slate-950 border border-slate-200 rounded-2xl p-8 md:p-10 shadow-2xl"
          >
            <div className="mb-6">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">
                Start a conversation
              </p>

              <h3 className="text-2xl font-bold text-slate-900">
                Send me a message
              </h3>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2 text-slate-800">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg outline-none focus:border-slate-900 focus:bg-white transition"
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2 text-slate-800">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg outline-none focus:border-slate-900 focus:bg-white transition"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-slate-800">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg outline-none focus:border-slate-900 focus:bg-white transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3.5 rounded-lg bg-slate-900 text-white hover:bg-slate-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 font-semibold"
            >
              {status === "sending"
                ? "Sending..."
                : status === "success"
                ? "Message Sent ✓"
                : "Send Message →"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-sm text-center mt-4">
                Thanks! Your message has been sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-600 text-sm text-center mt-4">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;