import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div id="projects" className="p-10 bg-black text-white">
      <h2 className="text-3xl mb-6">Projects</h2>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gray-900 p-6 rounded-xl mb-4"
      >
        <h3 className="text-xl font-bold">
          Breast Cancer Prediction Model
        </h3>
        <p className="text-gray-400">
          Improved accuracy by 12% using CNN + Vision Transformer
        </p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gray-900 p-6 rounded-xl"
      >
        <h3 className="text-xl font-bold">
          Data Dashboard Project
        </h3>
        <p className="text-gray-400">
          Built interactive dashboard using real-world dataset
        </p>
      </motion.div>
    </div>
  );
}