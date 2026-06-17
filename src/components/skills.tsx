import html from "../assets/icons/html5-brands-solid-full.svg";
import css from "../assets/icons/css3-brands-solid-full.svg";
import js from "../assets/icons/js-brands-solid-full.svg";
import react from "../assets/icons/react-brands-solid-full.svg";
import ts from "../assets/icons/typescript-brands-solid-full.svg";
import tailwind from "../assets/icons/tailwind-css-brands-solid-full.svg";
import python from "../assets/icons/python-brands-solid-full.svg";
import java from "../assets/icons/java-brands-solid-full.svg";
import firebase from "../assets/icons/fire-solid-full.svg";
import wordpress from "../assets/icons/wordpress-brands-solid-full.svg";
import figma from "../assets/icons/figma-brands-solid-full.svg";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: js },
    { name: "React", icon: react },
    { name: "TypeScript", icon: ts },
    { name: "TailwindCSS", icon: tailwind },
    { name: "Python", icon: python },
    { name: "Java", icon: java },
    { name: "Firebase", icon: firebase },
    { name: "WordPress", icon: wordpress },
    { name: "Figma", icon: figma },
  ];
  return (
    <section
      className="w-full px-10 flex flex-col items-center mt-30"
      id="skills"
    >
      <div className="text-white max-w-7xl w-10/12">
        <h2 className="text-2xl mb-5 md:text-3xl lg:text-4xl">Habilidades</h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 mt-5 lg:mt-10">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="size-20 p-3 rounded-xl border border-[#7ff7ff]/20 bg-white/5 group-hover:border-[#7ff7ff]/60 group-hover:bg-[#7ff7ff]/10 transition-all duration-300">
                <img src={skill.icon} alt={skill.name} className="w-full" />
              </div>
              <span className="text-xs text-white/60 group-hover:text-[#7ff7ff] transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
