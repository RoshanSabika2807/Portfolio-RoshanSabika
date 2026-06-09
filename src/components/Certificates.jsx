import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaReact } from "react-icons/fa";

function Certificates() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  const detailsAnimation = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
  };

  return (
    <section id="certificates" className="py-20">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-12"
      >
        Certificates
      </motion.h2>

      <div className="max-w-5xl space-y-6">

        {/* HDCA */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-[#6374A2] text-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">🎓</span>

            <h3 className="text-xl font-bold">
              Honours Diploma in Computer Application (HDCA)
            </h3>
          </div>

          <div className="flex justify-between items-center mt-2">
            <p className="font-semibold">
              CSC Computer Education, Pudukkottai
            </p>

            <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
              ✓ Completed
            </span>
          </div>

          <p className="mt-4">
            Learned computer fundamentals, MS Office, web development
            (HTML, CSS), MySQL, C, C++, Python, OOP concepts,
            Advanced Python, Digital Marketing, and AI tools through
            the HDCA diploma program.
          </p>

          <button
            onClick={() => toggle(0)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {openIndex === 0 ? "Hide Details" : "View Details"}
          </button>

          <AnimatePresence>
            {openIndex === 0 && (
              <motion.div
                key="hdca"
                {...detailsAnimation}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="mt-4 bg-gray-50 p-4 rounded-lg overflow-hidden"
              >
                <h4 className="font-semibold mb-2">Key Topics</h4>
                <ul className="list-disc ml-5">
                  <li>HTML & CSS</li>
                  <li>MySQL</li>
                  <li>C & C++</li>
                  <li>Python Programming</li>
                  <li>Digital Marketing</li>
                  <li>AI Tools</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* AI Certificate */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-[#606C80] text-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
      
        >
          <div className="flex items-center gap-3">
            <FaRobot className="text-purple-600 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">
              Basics of Artificial Intelligence
            </h3>
          </div>

          <div className="flex justify-between items-center mt-2">
            <p className="font-semibold">Mindluster</p>

            <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
              ✓ Completed
            </span>
          </div>

          <p className="mt-4">
            An intensive foundational program focused on AI concepts.
          </p>

          <button
            onClick={() => toggle(1)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {openIndex === 1 ? "Hide Details" : "View Details"}
          </button>

          <AnimatePresence>
            {openIndex === 1 && (
              <motion.div
                key="ai"
                {...detailsAnimation}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="mt-4 bg-gray-50 p-4 rounded-lg overflow-hidden"
              >
                <h4 className="font-semibold mb-2">Key Topics</h4>
                <ul className="list-disc ml-5">
                  <li>Machine Learning</li>
                  <li>Neural Networks</li>
                  <li>NLP Basics</li>
                  <li>AI Applications</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* React Internship */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#6D9CA6] text-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center gap-3">
            <FaReact className="text-cyan-500 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">
              React Development Internship
            </h3>
          </div>

          <div className="flex justify-between items-center mt-2">
            <p className="font-semibold">Qryptex</p>

            <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
              🚀 In Progress
            </span>
          </div>

          <p className="mt-4">
            Experience in React.js and frontend development.
          </p>

          <button
            onClick={() => toggle(2)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {openIndex === 2 ? "Hide Details" : "View Details"}
          </button>

          <AnimatePresence>
            {openIndex === 2 && (
              <motion.div
                key="react"
                {...detailsAnimation}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="mt-4 bg-gray-50 p-4 rounded-lg overflow-hidden"
              >
                <h4 className="font-semibold mb-2">Key Topics</h4>
                <ul className="list-disc ml-5">
                  <li>React.js</li>
                  <li>Component Architecture</li>
                  <li>Responsive UI</li>
                  <li>Frontend Development</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

export default Certificates;