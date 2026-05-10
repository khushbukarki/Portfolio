import { motion } from "framer-motion";
import "./index.css";
import Projects from "./components/pro";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center">
      
      {/* HERO SECTION */}
      <div className="flex flex-col justify-center items-center h-screen">
        
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I'm Khushbu 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-xl text-gray-400 mb-6"
        >
          Data Analyst | AI Enthusiast | Problem Solver
        </motion.p>

        {/* CTA BUTTON */}
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.1 }}
          className="bg-blue-500 px-6 py-3 rounded-xl text-white"
        >
          View My Work
        </motion.a>
      </div>

      {/* 👇 PROJECT SECTION */}
      <Projects />

    </div>
  );
}