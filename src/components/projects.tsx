import ecommerceBg from "../assets/images/ecommerce-product-page.png";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "E-commerce Page",
      coverImg: ecommerceBg,
      description:
        "Página de produto de e-commerce responsiva desenvolvida com React, TypeScript e TailwindCSS. O projeto foi construído como solução para um desafio do Frontend Mentor, com foco em layout adaptável para diferentes dispositivos e experiência de usuária interativa — incluindo galeria de imagens e carrinho de compras.",
      url: "https://ecommerce-product-page-u9n1.vercel.app/",
      github: "https://github.com/Edmon-Nascimento/ecommerce-product-page",
      stack: ["React", "TypeScript", "TailwindCSS"],
      date: "05/2026",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full px-10 flex flex-col items-center mt-30"
    >
      <div className="text-white max-w-7xl w-10/12 flex flex-col">
        <h2 className="text-2xl mb-8 md:text-3xl lg:text-4xl">
          Meus <span className="text-[#7ff7ff]">Projetos</span>
        </h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden border border-[#7ff7ff]/20 bg-white/5"
            >
              <img
                src={project.coverImg}
                alt={project.title}
                className="w-full object-cover opacity-70 group-hover:opacity-100 duration-300"
              />

              <div className="opacity-0 group-hover:opacity-100 absolute inset-0 duration-300 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center gap-4 p-6">
                <h2 className="text-lg font-bold text-[#7ff7ff]">{project.title}</h2>
                <p className="text-sm text-white/80 text-center line-clamp-3">{project.description}</p>
                <div className="flex gap-3 mt-2">
                  <a href={project.url} target="_blank">
                    <Button className="bg-[#7ff7ff] text-[#1c1b2a] cursor-pointer font-semibold hover:bg-[#7ff7ff]/80">
                      Ver projeto
                    </Button>
                  </a>
                  <a href={project.github} target="_blank">
                    <Button className="border border-[#7ff7ff] text-[#7ff7ff] bg-transparent cursor-pointer hover:bg-[#7ff7ff]/10">
                      GitHub
                    </Button>
                  </a>
                </div>
                <div className="flex gap-2 flex-wrap justify-center mt-1">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded-full border border-[#7ff7ff]/30 text-[#7ff7ff]/70">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}