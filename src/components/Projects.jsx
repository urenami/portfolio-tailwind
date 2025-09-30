export default function Projects() {
  const projects = [
    {
      title: "Movie App",
      description:
        "Streaming-style app with search, browse, and favorites. React frontend with auth & protected routes; Node/Express + MongoDB backend.",
      tech: [
        {
          name: "React",
          color:
            "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200",
        },
        {
          name: "Node.js",
          color:
            "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-200",
        },
        {
          name: "Express",
          color:
            "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200",
        },
        {
          name: "MongoDB",
          color:
            "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200",
        },
        {
          name: "JWT",
          color:
            "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-200",
        },
      ],
      demo: "https://ezmyflixapp.netlify.app/login",
      github: "https://github.com/urenami/movie-api",
    },
    {
      title: "Pokédex App",
      description:
        "Client-side app using the PokéAPI to fetch Pokémon data. Users can search by name and view stats and details. Focus on API integration and responsive UI.",
      tech: [
        {
          name: "JavaScript",
          color:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-200",
        },
        {
          name: "jQuery",
          color:
            "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-200",
        },
        {
          name: "HTML",
          color: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-200",
        },
        {
          name: "CSS",
          color:
            "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200",
        },
      ],
      demo: "https://urenami.github.io/Pokedex-app/",
      github: "https://github.com/urenami/Pokedex-app",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] transition duration-300"
            >
              <div className="p-6">
                <h3
                  className="text-xl font-semibold text-indigo-600 mb-2 
             dark:text-indigo-400 dark:drop-shadow-[0_0_6px_rgba(99,102,241,0.6)]"
                >
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs rounded-full ${t.color}`}
                    >
                      {t.name}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-4">
                  {/* Glow Demo Button */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow 
             hover:bg-indigo-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] 
             transition"
                  >
                    Demo
                  </a>

                  {/* Outlined GitHub Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
