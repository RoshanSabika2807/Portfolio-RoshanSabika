function Sidebar() {
  return (
    <aside className="fixed md-flex fixed left-0 top-0 h-screen w-28 md:w-64  bg-[#5684AE] text-white flex flex-col justify-center">
      <ul className="space-y-4 md:space-y-6 text-sm md:text-base text-center font-semibold">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;