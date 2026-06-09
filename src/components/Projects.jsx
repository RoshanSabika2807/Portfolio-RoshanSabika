import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl">
        <h2 className="text-5xl font-bold mb-12">
          Featured Projects
        </h2>

        <div className="space-y-8">

          {/* Zestora */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="bg-[#5684AE] text-gray-800 p-8 rounded-2xl shadow-md border-l-8 border-[#6D9CA6] hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-bold">
              Zestora
            </h3>

            <p className="text-gray-800 leading-relaxed mb-6">
              Zestora is a food business showcase platform that helps restaurants
              and food vendors display their menus, specialties, and contact
              details online. It enables customers to discover food shops easily.
            </p>

            <h4 className="font-semibold mb-3">Technologies Used:</h4>

            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-100 text-cyan-800 text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default">
                <FaReact /> React.js
              </span>

              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-100 text-sky-800 text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default">
                <SiTailwindcss /> Tailwind CSS
              </span>

              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-100 text-orange-800 text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default">
                <FaHtml5 /> HTML
              </span>

              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-100 text-yellow-800 text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default">
                <FaJs /> JavaScript
              </span>

              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 text-green-800 text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default">
                <FaNodeJs /> Node.js
              </span>
            </div>
          </motion.div>

          {/* Trackly */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#6D9CA6] text-gray-800 p-8 rounded-3xl shadow-md border-l-8 border-[#5684AE] hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-bold">
              Trackly
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              A streamlined student platform for intelligently filtering and
              discovering internships, scholarships, hackathons, certifications,
              and career opportunities in one place.
            </p>

            <h4 className="font-semibold mb-3">Technologies Used:</h4>

            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-100 text-cyan-800 text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default">
                <FaReact /> React.js
              </span>

              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-100 text-sky-800 text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default">
                <SiTailwindcss /> Tailwind CSS
              </span>

              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 text-green-800 text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default">
                <FaNodeJs /> Node.js
              </span>

              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-100 text-yellow-800 text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default">
                <FaJs /> JavaScript
              </span>

              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-100 text-violet-800 text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default">
                <SiVite /> Vite
              </span>
            </div>
          </motion.div>

          {/* Food Rescue */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-[#606C80] text-gray-800 p-8 rounded-3xl shadow-md border-l-8 border-[#B3CEE5] hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-bold">
              Food Rescue
            </h3>

            <p className="text-gray-900 leading-relaxed mb-6">
              Food Rescue is a food donation management platform that connects
              donors and NGOs. It enables surplus food donation, NGO claiming,
              and real-time tracking to reduce food waste and support communities
              in need.
            </p>

            <h4 className="font-semibold mb-3">Technologies Used:</h4>

            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-100 text-cyan-800 text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default">
                <FaReact /> React.js
              </span>

              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-100 text-sky-800 text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default">
                <SiTailwindcss /> Tailwind CSS
              </span>

              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 text-green-800 text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default">
                <FaNodeJs /> Node.js
              </span>

              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-100 text-yellow-800 text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default">
                <FaJs /> JavaScript
              </span>

              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-100 text-violet-800 text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default">
                <SiVite /> Vite
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Projects;