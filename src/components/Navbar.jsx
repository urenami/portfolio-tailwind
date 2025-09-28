export default function Navbar() {
  return (
    <nav className="bg-indigo-900 text-white px-8 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto w-full">
        {/* Logo */}
        <a
          href="/"
          className="text-3xl font-heading font-extrabold tracking-tight bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
        >
          Michael.dev
        </a>

        {/* Links */}
        <div className="flex gap-8 font-heading text-lg uppercase tracking-wide items-center">
          <a href="#about" className="relative group">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Highlighted Projects */}
          <a
            href="#projects"
            className="px-4 py-1.5 rounded-full bg-teal-400 text-indigo-900 font-semibold shadow-sm 
             hover:bg-teal-300 hover:shadow-[0_0_12px_rgba(45,212,191,0.6)] transition"
          >
            Projects
          </a>

          <a href="#contact" className="relative group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}
