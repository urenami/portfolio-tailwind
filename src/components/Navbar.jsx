export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold">
          <span className="text-indigo-400">Michael</span>
          <span className="text-gray-200">.dev</span>
        </a>

        {/* Nav Links */}
        <nav className="flex gap-8 text-white font-medium">
          {/* About with underline on hover */}
          <a
            href="#about"
            className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
                       after:bg-indigo-400 after:transition-all after:duration-300 
                       hover:after:w-full hover:text-indigo-300"
          >
            ABOUT
          </a>

          {/* Projects with pill highlight */}
          <a
            href="#projects"
            className="px-4 py-1 rounded-full bg-indigo-500 text-white font-semibold shadow-lg
                       hover:bg-indigo-400 transition"
          >
            PROJECTS
          </a>

          {/* Contact with underline on hover */}
          <a
            href="#contact"
            className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
                       after:bg-indigo-400 after:transition-all after:duration-300 
                       hover:after:w-full hover:text-indigo-300"
          >
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
}
