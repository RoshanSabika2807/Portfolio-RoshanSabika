function Contact() {
  return (
    <section id="contact" className="py-20">

      <h2 className="text-4xl font-bold mb-6">
        Contact 
      </h2>
      
      <a
        href="https://github.com/RoshanSabika2807"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-5 bg-[#645394] text-white px-6 py-3 rounded-lg"
      >
        GitHub
      </a>

      
        Email:{" "}
        <a href="mailto:roshansabika2807@gmail.com" className="text-blue-600 underline">
          roshansabika2807@gmail.com
        </a>
      

      <p className="mt-6">
        Let's connect and create something meaningful!
      </p>

    </section>
  );
}

export default Contact;