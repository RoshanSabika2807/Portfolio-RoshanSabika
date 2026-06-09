function Home() {
  return (
    <section
      id="home"
      className="w-full overflow-x-hidden ml-64 px-10"
    >
      <div className="">

        {/* Name */}
        <h1 className="text-5xl w-full overflow-x-hidden ml-64 px-10">
          I'M <br />
          ROSHAN <br />
          SABIKA A
        </h1>

        {/* Role */}
        <p className="text-xl md:text-3xl font-semibold mt-6 ">
          Software Developer
        </p>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base md:text-xl leading-relaxed">
          Passionate about creating modern web applications and turning
          ideas into impactful digital experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">

          <a
            href="#contact"
            className="bg-[#6F4685] text-white px-8 py-3 rounded-lg text-center hover:opacity-90 transition"
          >
            Contact
          </a>

          <a
            href="#projects"
            className="bg-[#AE5969] text-white px-8 py-3 rounded-lg text-center hover:opacity-90 transition"
          >
            View Projects
          </a>

        </div>

      </div>
    </section>
  );
}

export default Home;