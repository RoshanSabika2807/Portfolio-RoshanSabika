import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

function Education() {
  return (
    <section id="education" className="py-20">

      {/* TITLE */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-10"
      >
        Education
      </motion.h2>

      {/* CARD */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.7 }}

        whileHover={{
          scale: 1.03,
          y: -8
        }}

        className="max-w-3xl bg-[#6D9CA6] shadow-lg rounded-xl p-8 border-l-4 border-[#5A7D6E] cursor-pointer"
      >
        <h3 className="text-2xl font-bold">
          🎓 Bachelor of Computer Applications (BCA)
        </h3>

        <p className="text-xl font-bold mt-2">
          Jamal Mohamed College, Trichy.
        </p>

        <p className="text-gray-600 font-semibold mt-2">
          2025 - Present
        </p>

        <p className="text-gray-600 mt-5 leading-8">
          My academic journey focuses on developing technical expertise and
          practical experience through continuous learning and hands-on project
          development. Alongside my coursework, I actively work on personal
          projects that strengthen my understanding of modern development
          practices and creative problem-solving.
        </p>

        <ul className="mt-6 space-y-2 text-gray-700">
          <li>◆ Strong foundation in programming and web development</li>
          <li>◆ Experience with modern tools and frameworks</li>
          <li>◆ Active involvement in project-based learning</li>
          <li>◆ Passionate about frontend development</li>
        </ul>
      </motion.div>

    </section>
  );
}

export default Education;