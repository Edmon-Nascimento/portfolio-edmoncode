import ecommerceBg from "../assets/images/ecommerce-product-page.png";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "E-commerce Page",
      coverImg: ecommerceBg,
      description:
        "Página de produto de e-commerce responsiva desenvolvida com React, TypeScript e TailwindCSS. O projeto foi construído como solução para um desafio do Frontend Mentor, com foco em layout adaptável para diferentes dispositivos e experiência de usuário interativa — incluindo galeria de imagens e carrinho de compras.",
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
      <div className="text-white max-w-7xl w-10/12 lg:flex lg:justify-between">
        <h2 className="text-2xl mb-5 md:text-3xl lg:text-4xl">Projetos</h2>
        <div className="text-justify text-sm md:text-xl lg:text-lg lg:max-w-9/12 lg:mt-10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden mb-8"
            >
              <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
              <img
                src={project.coverImg}
                alt={project.title}
                className="w-full rounded-xl opacity-70 group-hover:opacity-100 duration-300"
              />
              <div className="opacity-0 group-hover:opacity-100 absolute inset-0 top-8 duration-300 bg-black/60 backdrop-blur-sm rounded-xl flex items-center justify-center gap-4">
                <a href={project.url} target="_blank">
                  <Button className="bg-[#7ff7ff] text-[#1c1b2a] cursor-pointer font-semibold">
                    Ver projeto
                  </Button>
                </a>
                <Button className="border border-[#7ff7ff] text-[#7ff7ff] bg-transparent cursor-pointer">
                  Detalhes
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
