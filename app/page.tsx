import Aboutme from "@/components/Aboutme";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const navItems = [
    { name: "JM", link: "/" },
    { name: "About", link: "#aboutme" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <main className="bg-black-100 flex justify-center items-center mx-auto sm:px-10 px-5 overflow-hidden">
      <div>
        <ToastContainer />
        <FloatingNav navItems={navItems} />
        <Hero />
        <Aboutme />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
