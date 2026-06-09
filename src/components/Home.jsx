function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center"
    >
      <h1 className="text-5xl font-bold">
        I'M ROSHAN SABIKA A
      </h1>

      <p className="text-xl font-semibold mt-4 text-[#A66A3F]">
        Frontend Developer | React & JavaScript Enthusiast
      </p>

      <p className="mt-6 max-w-xl">
        Passionate about creating modern web applications and turning ideas into impactful digital experiences.
      </p>

      <div className="flex flex-col gap-4 mt-8 w-52">
        <a
          href="#contact"
          className="bg-[#6F4685] text-white py-3 rounded-lg text-center"
        >
          Contact
        </a>

        <a
          href="#projects"
          className="bg-[#AE5969] text-white py-3 rounded-lg text-center"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}

export default Home;