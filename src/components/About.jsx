import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-10 text-left"
      >
        ABOUT
      </motion.h2>

      {/* About Card */}
      <motion.div
        initial={{ opacity: 0,  }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        whileHover={{
          scale: 1.03,
          y: -8
        }}
        className="max-w-3xl bg-[#5684AE]  shadow-lg rounded-xl p-8 border-l-4 border-[#5A7D6E] cursor-pointer transition-all duration-300"
      >
        <p className="mb-4 text-gray-900 leading-8 text-left">
          I am a BCA student with a strong passion for web development,
          focused on building modern, responsive, and intuitive digital
          experiences. I enjoy transforming ideas into functional web
          applications and refining them through clean design, structured
          code, and attention to user experience. I am currently
          strengthening my skills in HTML, CSS, JavaScript, and modern
          development tools, while continuously learning through hands-on
          projects that sharpen my problem-solving and development thinking.
          My aim is to grow into a skilled full-stack developer who builds
          impactful, real-world solutions through technology.
        </p>

        <p className="text-gray-900 leading-8 text-left">
          Alongside my academics, I actively work on improving my practical
          skills by building small projects and experimenting with different
          design and development concepts.
        </p>
      </motion.div>

    </section>
  );
}

export default About;