import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Sidebar />

      <main className="w-full overflow-x-hidden ml-64 px-10">
        <Home />
        <About />
        <Education />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;