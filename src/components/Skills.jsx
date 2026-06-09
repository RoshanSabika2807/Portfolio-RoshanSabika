import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiPython,
} from "react-icons/si";

const cardVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-5xl font-bold mb-12">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Programming Languages */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-[#6374A2] text-gray-800 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="font-bold mb-4 text-xl">
            Programming Languages
          </h3>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <SiPython className="text-blue-500 text-xl" />
              <span>Python</span>
            </div>

            <div className="flex items-center gap-3">
              <FaJs className="text-yellow-500 text-xl" />
              <span>JavaScript</span>
            </div>

            <div className="flex items-center gap-3">
              <FaJava className="text-red-600 text-xl" />
              <span>Java</span>
            </div>

            <div className="flex items-center gap-3">
              <span>•</span>
              <span>C</span>
            </div>

            <div className="flex items-center gap-3">
              <span>•</span>
              <span>C++</span>
            </div>
          </div>
        </motion.div>

        {/* Frontend Development */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#5684AE] text-gray-800 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="font-bold text-xl mb-4">
            Frontend Development
          </h3>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaHtml5 className="text-orange-600 text-xl" />
              <span>HTML</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCss3Alt className="text-blue-600 text-xl" />
              <span>CSS</span>
            </div>

            <div className="flex items-center gap-3">
              <SiTailwindcss className="text-sky-500 text-xl" />
              <span>Tailwind CSS</span>
            </div>

            <div className="flex items-center gap-3">
              <FaReact className="text-cyan-500 text-xl" />
              <span>React.js</span>
            </div>
          </div>
        </motion.div>

        {/* Backend & Database */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#6D9CA6] text-gray-800 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="font-bold text-xl mb-4">
            Backend & Database
          </h3>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaNodeJs className="text-green-600 text-xl" />
              <span>Node.js</span>
            </div>

            <div className="flex items-center gap-3">
              <SiMysql className="text-blue-700 text-xl" />
              <span>MySQL</span>
            </div>
          </div>
        </motion.div>

        {/* Tools & Platforms */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#637476] text-gray-800 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="font-bold text-xl mb-4 text-black">
            Tools & Platforms
          </h3>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaGitAlt className="text-red-600 text-xl" />
              <span>Git</span>
            </div>

            <div className="flex items-center gap-3">
              <FaGithub className="text-black text-xl" />
              <span>GitHub</span>
            </div>

            <div className="flex items-center gap-3">
              <span>•</span>
              <span>VS Code</span>
            </div>
          </div>
        </motion.div>

        {/* Productivity & Other Skills */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#606C80] text-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 md:col-span-2"
        >
          <h3 className="font-bold text-xl mb-4">
            Productivity & Other Skills
          </h3>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span>•</span>
              <span>MS Office</span>
            </div>

            <div className="flex items-center gap-3">
              <span>•</span>
              <span>Digital Marketing</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;