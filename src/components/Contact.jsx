import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xeoqadoo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]">
          Get In Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Want to work together or just say hello? Fill out the form below and
          I’ll get back to you soon.
        </p>

        {status && (
          <p
            className={`mb-4 ${
              status === "SUCCESS"
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {status === "SUCCESS"
              ? "Message sent successfully!"
              : "Something went wrong. Please try again."}
          </p>
        )}

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="5"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] transition"
          >
            Send Message
          </button>
        </form>

        {/* Secondary links */}
        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          <a
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition"
          >
            Resume
          </a>
          <a
            href="https://github.com/urenami"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/michael-u-a8b67957/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
