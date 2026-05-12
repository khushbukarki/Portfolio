import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs", "SQL"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "Vite", "Docker", "VS Code", "DevTools"]
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Communication", "Team Collaboration", "Agile", "Testing"]
    }
  ];

  return (
    <section id="skills" className="w-full py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mb-16"
        >
          Technologies and tools I work with
        </motion.p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-6">{cat.category}</h3>
              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (idx * 0.1) + (i * 0.05) }}
                    className="flex items-center"
                  >
                    <span className="text-green-400 text-lg mr-3">✓</span>
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;