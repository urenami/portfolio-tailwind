export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8
                     dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]"
        >
          About Me
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-loose mb-6">
          I’m a full-stack web developer who works with React, Node.js,
          Express, and MongoDB. Before moving into tech, I spent over ten
          years in compliance and management. That experience taught me
          problem-solving, teamwork, and how to stay calm under pressure.
        </p>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-loose">
          I like building apps that are clean, responsive, and useful. I’m
          always learning something new to get better at what I do and I’m
          looking for opportunities where I can keep growing as a developer
          while contributing to real projects.
        </p>
      </div>
    </section>
  );
}
