import { useState } from "react";
import { Menu, X } from "lucide-react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "home",
    "about",
    "education",
    "skills",
    "certificates",
    "projects",
    "contact",
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 right-5 z-50 bg-[#5684AE] text-white p-3 rounded-lg shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-[#5684AE] text-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col justify-center h-full space-y-8 text-center font-semibold text-lg">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-[#FFCFF1] transition"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;