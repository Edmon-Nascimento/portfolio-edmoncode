import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCss3Alt,
  faDocker,
  faFigma,
  faHtml5,
  faJava,
  faJs,
  faNodeJs,
  faPostgresql,
  faReact,
  faTailwindCss,
  faTypescript,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCodeBranch,
  faDatabase,
  faFlask,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import { SiExpress, SiNextdotjs } from "react-icons/si";
import type { IconType } from "react-icons";

type Skill = {
  name: string;
  icon?: IconDefinition;
  reactIcon?: IconType;
};

export default function Skills() {
  const skills: Skill[] = [
    { name: "HTML5", icon: faHtml5 },
    { name: "CSS3", icon: faCss3Alt },
    { name: "JavaScript", icon: faJs },
    { name: "React", icon: faReact },
    { name: "TypeScript", icon: faTypescript },
    { name: "Next.js", reactIcon: SiNextdotjs },
    { name: "Tailwind CSS", icon: faTailwindCss },
    { name: "Java", icon: faJava },
    { name: "Spring Boot", icon: faLeaf },
    { name: "Node.js", icon: faNodeJs },
    { name: "Express", reactIcon: SiExpress },
    { name: "PostgreSQL", icon: faPostgresql },
    { name: "Prisma", icon: faDatabase },
    { name: "Jest", icon: faFlask },
    { name: "Docker", icon: faDocker },
    { name: "Git", icon: faCodeBranch },
    { name: "Figma", icon: faFigma },
  ];
  return (
    <section
      className="w-full px-10 flex flex-col items-center mt-30"
      id="skills"
    >
      <div className="text-white max-w-7xl w-10/12">
        <h2 className="text-2xl mb-5 md:text-3xl lg:text-4xl">Habilidades</h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 mt-5 lg:mt-10">
          {skills.map((skill) => {
            const ReactIcon = skill.reactIcon;

            return (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="size-20 p-3 rounded-xl border border-[#7ff7ff]/20 bg-white/5 flex items-center justify-center group-hover:border-[#7ff7ff]/60 group-hover:bg-[#7ff7ff]/10 transition-all duration-300">
                  {ReactIcon ? (
                    <ReactIcon
                      aria-label={skill.name}
                      className="size-10! text-[#7ff7ff]"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={skill.icon!}
                      aria-label={skill.name}
                      className="size-10! text-[#7ff7ff]"
                    />
                  )}
                </div>
                <span className="text-xs text-white/60 group-hover:text-[#7ff7ff] transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
