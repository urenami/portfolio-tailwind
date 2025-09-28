import { FaReact, FaNodeJs, FaGitAlt, FaPython } from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiDjango,
  SiExpress,
  SiPostman,
} from "react-icons/si";
import { FiChevronDown } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 pt-24 pb-16 overflow-hidden">
      {/* Card */}
      <div className="bg-white rounded-2xl p-12 text-center text-gray-900 shadow-2xl border border-gray-200 max-w-5xl w-full mx-4 relative z-10">
        <h1 className="text-5xl font-extrabold">
          Hi, I’m <span className="text-indigo-900">Michael 👋</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
          Full Stack Developer focused on building clean, modern, and
          user-friendly web applications.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a
            href="#resume"
            className="px-6 py-3 bg-indigo-900 text-white font-medium rounded-lg 
             shadow-[0_0_15px_4px_rgba(79,70,229,0.6)] 
             animate-[pulseGlow_2s_ease-in-out_infinite] 
             hover:bg-indigo-800 
             hover:shadow-[0_0_30px_12px_rgba(79,70,229,0.9)] 
             transition"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/urenami"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-indigo-900 text-indigo-900 font-medium rounded-lg hover:bg-indigo-50 transition"
          >
            View GitHub
          </a>
          <a
            href="https://linkedin.com/in/urenami"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-indigo-900 text-indigo-900 font-medium rounded-lg hover:bg-indigo-50 transition"
          >
            View LinkedIn
          </a>
        </div>

        {/* Tech Stack */}
        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-gray-600 mb-6">
            Tech Stack
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-gray-700">
            {[
              {
                icon: <FaReact size={40} className="text-cyan-500" />,
                name: "React",
              },
              {
                icon: <SiJavascript size={40} className="text-yellow-500" />,
                name: "JavaScript",
              },
              {
                icon: <FaNodeJs size={40} className="text-green-600" />,
                name: "Node.js",
              },
              {
                icon: <SiExpress size={40} className="text-gray-800" />,
                name: "Express",
              },
              {
                icon: <SiMongodb size={40} className="text-green-700" />,
                name: "MongoDB",
              },
              {
                icon: <SiPostman size={40} className="text-orange-500" />,
                name: "Postman",
              },
              {
                icon: <SiTailwindcss size={40} className="text-sky-500" />,
                name: "Tailwind CSS",
              },
              {
                icon: <FaGitAlt size={40} className="text-red-500" />,
                name: "Git",
              },
              {
                icon: <FaPython size={40} className="text-blue-400" />,
                name: "Python",
              },
              {
                icon: <SiDjango size={40} className="text-green-800" />,
                name: "Django",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center hover:scale-110 transition-transform"
              >
                <div className="p-4 rounded-full bg-gray-100 shadow-md flex items-center justify-center">
                  {tech.icon}
                </div>
                <span className="mt-2 text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-100 z-0"></div>

      {/* Arrow */}
      <div className="relative z-20 mt-8 animate-bounce">
        <a
          href="#projects"
          className="p-3 rounded-full bg-indigo-900 text-white flex items-center justify-center 
               shadow-[0_0_15px_4px_rgba(79,70,229,0.6)] 
               animate-[pulseGlow_2s_ease-in-out_infinite] 
               hover:shadow-[0_0_30px_12px_rgba(79,70,229,0.9)] transition"
        >
          <FiChevronDown size={28} />
        </a>
      </div>

      <style jsx global>{`
        @keyframes pulseGlow {
          0%,
          100% {
            box-shadow: 0 0 15px 4px rgba(79, 70, 229, 0.6);
          }
          50% {
            box-shadow: 0 0 25px 8px rgba(79, 70, 229, 0.8);
          }
        }
      `}</style>
    </section>
  );
}
