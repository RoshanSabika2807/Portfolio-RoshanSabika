import { FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-20">

      <h2 className="text-4xl font-bold mb-8">
        Contact
      </h2>

      <div className="flex flex-col gap-6 text-lg">

        {/* GitHub */}
        <div className="flex items-center gap-3">
          <FaGithub size={24} />
          <a
            href="https://github.com/RoshanSabika2807"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#645394] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            GitHub
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <FaEnvelope size={24} />
          <a
            href="mailto:roshansabika2807@gmail.com"
            className="text-blue-400 underline break-all"
          >
            roshansabika2807@gmail.com
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt size={24} />
          <span>
            Pudukkottai, Tamil Nadu, India
          </span>
        </div>

      </div>

      <p className="mt-8 text-lg">
        Let's connect and create something meaningful!
      </p>

    </section>
  );
}

export default Contact;