import React from "react";

const projects = [
  {
    title: "Codaris – AI Code Review Platform",
    description:
      "An AI-powered code review platform designed to analyze code, identify issues, and help improve code quality.",
    tech: ["React", "Python", "AI Integration", "GitHub"],
    skills: "AI-based development, frontend design, software quality analysis, problem-solving",
    github: "https://github.com/harshini6651/Codaris",
  },
  {
    title: "Penta-Class Sentiment Analysis of Tweets",
    description:
      "A machine learning and NLP project focused on classifying tweets into five sentiment categories.",
    tech: ["Python", "NLP", "Machine Learning", "Data Analysis"],
    skills: "NLP, ML concepts, text classification, data preprocessing",
    github: "https://github.com/harshini6651/Penta-class-Sentiment-Analysis-of-tweets",
  },
  {
    title: "AI Data Assistant",
    description:
      "A Streamlit-based AI data assistant that converts natural language questions into SQL and retrieves insights from MySQL.",
    tech: ["Python", "Streamlit", "MySQL", "SQL"],
    skills: "SQL generation, database querying, data visualization, AI-assisted analytics",
    github: "https://github.com/harshini6651/ai-data-assistant",
  },
  {
    title: "AI Healthcare Chatbot",
    description:
      "A healthcare chatbot built using Python, Flask, NLP, and Gemini API.",
    tech: ["Python", "Flask", "NLP", "Gemini API"],
    skills: "Chatbot development, API integration, NLP, backend development",
    github: "https://github.com/harshini6651/ai-healthcare-assist",
  },
  {
    title: "Hospital Management System",
    description:
      "A Java-based backend system using JDBC and MySQL for hospital management.",
    tech: ["Java", "JDBC", "MySQL"],
    skills: "OOP, database connectivity, CRUD operations, backend logic",
    github: "#",
  },
];

const skills = [
  "Python",
  "Java",
  "C",
  "MySQL",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Flask",
  "Streamlit",
  "NLP",
  "AI/ML Concepts",
  "GitHub",
  "Problem Solving",
];

const certifications = [
  {
    name: "Deloitte Technology Job Simulation – Forage",
    link:
      "https://www.theforage.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_6992fea4fc9eb2237753094e_1780060381215_completion_certificate.pdf",
  },
  {
    name: "Walmart Job Simulation Certificate",
    link: "#",
  },
  {
    name: "Salesforce Certified Agentforce Specialist",
    link: "#",
  },
  {
    name: "Smart India Hackathon Participation Certificate",
    link: "#",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-bold">
            Lalitha Sri Harshini
          </a>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#education" className="hover:text-white">Education</a>
            <a href="#certifications" className="hover:text-white">Certifications</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <section id="home" className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-cyan-300">✨ AI & ML Student Portfolio</p>

        <h1 className="text-4xl font-extrabold md:text-6xl">
          Hi, I’m{" "}
          <span className="text-cyan-300">
            Sandugula Lalitha Sri Harshini
          </span>
        </h1>

        <p className="mt-5 text-xl text-slate-300">
          Computer Science Engineering student specializing in Artificial
          Intelligence and Machine Learning.
        </p>

        <p className="mt-4 max-w-3xl text-slate-400">
          Fresher with strong project-based experience in Python, Java, React,
          MySQL, NLP, AI applications, and data-driven solutions.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-white/20 px-5 py-3"
          >
            Contact Me
          </a>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">🎓 About Me</h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            I am a Computer Science and Engineering student specializing in
            Artificial Intelligence and Machine Learning at CMR Engineering
            College. As a fresher, I have focused on strengthening my technical
            foundation through academic learning and hands-on projects. My work
            includes AI-powered applications, NLP-based systems, database-driven
            projects, and web development.
          </p>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">💻 Technical Skills</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">Featured Projects</h2>

          <p className="mt-3 text-slate-400">
            These projects highlight my AI/ML degree skills, programming
            knowledge, database understanding, and practical application
            development.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-white/10 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-bold">{project.title}</h3>

                <p className="mt-3 text-slate-400">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-sm text-slate-300">
                  <strong>Skills Highlighted:</strong> {project.skills}
                </p>

                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-block text-cyan-300"
                  >
                    💻 View GitHub
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Education</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-bold text-cyan-200">B.Tech CSE – AI & ML</h3>
            <p className="mt-2 text-slate-300">CMR Engineering College</p>
            <p className="mt-2 text-slate-400">Current CGPA: 9.02</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-bold text-cyan-200">Intermediate</h3>
            <p className="mt-2 text-slate-300">Narayana Junior College</p>
            <p className="mt-2 text-slate-400">Percentage: 91.3%</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-bold text-cyan-200">SSC</h3>
            <p className="mt-2 text-slate-300">St. Claret High School</p>
            <p className="mt-2 text-slate-400">CGPA: 10</p>
          </div>
        </div>
      </section>

      <section
        id="certifications"
        className="border-y border-white/10 bg-white/[0.03]"
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">
            🏆 Certifications & Achievements
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl border border-white/10 bg-slate-950 p-6"
              >
                <h3 className="font-semibold">{cert.name}</h3>
                <p className="mt-3 text-sm text-slate-400">
                  {cert.link === "#" ? "Certificate link coming soon" : "View Certificate"}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950 p-6">
            <h3 className="font-bold">Academic Achievements</h3>
            <p className="mt-3 text-slate-300">
              Maintaining a 9.02 CGPA in B.Tech CSE AI & ML, scored 91.3% in
              Intermediate, and achieved 10 CGPA in SSC.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>

        <p className="mx-auto mt-3 max-w-2xl text-slate-400">
          I am open to fresher opportunities, internships, and entry-level roles
          in software development, AI/ML, data analytics, and web development.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:lalithasriharshini@gmail.com"
            className="rounded-xl border border-white/20 px-5 py-3"
          >
            📧 Email
          </a>

          <a
            href="https://github.com/harshini6651"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/20 px-5 py-3"
          >
            💻 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/lalitha-sri-harshini-b14945312/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/20 px-5 py-3"
          >
            🔗 LinkedIn
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-slate-500">
        © 2026 Sandugula Lalitha Sri Harshini.
      </footer>
    </div>
  );
}