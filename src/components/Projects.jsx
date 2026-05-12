import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, product catalog, and Stripe payment integration. Handles 1000+ daily users.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/projects/ecommerce.jpg",
      liveLink: "https://ecommerce-demo.com",
      githubLink: "https://github.com/khushbukarki/ecommerce"
    },
    {
      id: 2,
      title: "Data Visualization Dashboard",
      description: "Interactive analytics dashboard with real-time data updates, charts, and user analytics. Built for data-driven decision making.",
      technologies: ["React", "Chart.js", "Firebase", "Tailwind"],
      image: "/projects/dashboard.jpg",
      liveLink: "https://dashboard-demo.com",
      githubLink: "https://github.com/khushbukarki/dashboard"
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "AI-powered application that generates SEO-optimized content using GPT-3 integration. Saves marketers 10+ hours weekly.",
      technologies: ["React", "OpenAI API", "Node.js", "PostgreSQL"],
      image: "/projects/ai-app.jpg",
      liveLink: "https://ai-content-demo.com",
      githubLink: "https://github.com/khushbukarki/ai-content"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="w-full py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
        >
          Featured Projects
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mb-16"
        >
          Showcase of my best work and recent projects
        </motion.p>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition border border-gray-700 hover:border-blue-500"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transition">
                <span className="text-white text-6xl">💻</span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed h-24 overflow-hidden">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 text-xs rounded-full border border-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-700 text-white py-2 rounded font-semibold hover:bg-gray-600 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;