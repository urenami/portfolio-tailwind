function Hero() {
  return (
    <section className="flex h-screen items-center justify-center bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100">
      <div className="bg-white rounded-2xl p-12 text-center text-gray-900 shadow-2xl border border-gray-200">
        <h1 className="text-5xl font-heading font-extrabold">
          Hi, I’m <span className="text-indigo-900">Michael 👋</span>
        </h1>
        <p className="mt-4 text-lg font-body text-gray-700 max-w-xl mx-auto">
          Full Stack Developer focused on building clean, modern, and
          user-friendly web applications.
        </p>

        {/* Buttons Row */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          {/* Resume */}
          <a
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-900 text-white font-heading font-medium rounded-lg shadow-md hover:bg-indigo-800 transition"
          >
            Download Resume
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/urenami" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-indigo-900 text-indigo-900 font-heading font-medium rounded-lg hover:bg-indigo-50 transition"
          >
            View GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/YOUR-LINKEDIN" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-indigo-900 text-indigo-900 font-heading font-medium rounded-lg hover:bg-indigo-50 transition"
          >
            View LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
