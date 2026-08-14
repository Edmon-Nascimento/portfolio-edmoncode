import receitanamaoBg from "../assets/images/receita-na-mao.png";
import ecommerceBg from "../assets/images/ecommerce-product-page.png";
import geradordesenhasBg from "../assets/images/gerador-de-senhas.png";
import goadvocaciaBg from "../assets/images/goadvocacia.png";
import loopstudiosBg from "../assets/images/loopstudios.png";
import openLink from "../assets/icons/open_in_new.svg";
import githubIcon from "../assets/icons/github-brands-solid-full.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Receita na mão",
      coverImg: receitanamaoBg,
      description:
        "Gerador de receitas com inteligência artificial desenvolvido com React, Vite e TailwindCSS, integrado à API de inferência da HuggingFace (modelo Mistral 7B). O projeto permite ao usuário adicionar os ingredientes disponíveis e receber uma receita gerada por IA, com título, lista de ingredientes, modo de preparo e dica do chef — com foco em arquitetura baseada em componentes e integração com APIs de LLM.",
      url: "https://receitanamao.vercel.app/",
      github: "https://github.com/Edmon-Nascimento/receita-na-mao",
      stack: ["React", "TypeScript", "TailwindCSS"],
      date: "06/2026",
    },
    {
      id: 4,
      title: "GO Advocacia e Consultoria Jurídica",
      coverImg: goadvocaciaBg,
      description:
        "Site institucional completo para escritório de advocacia, desenvolvido como freelancer do design ao deploy. O projeto incluiu levantamento de requisitos com o cliente, design responsivo mobile-first e estruturação de conteúdo, utilizando WordPress e Elementor. Foram aplicadas boas práticas de SEO on-page e otimização de performance, além de integração com WhatsApp e redes sociais para captação de leads.",
      url: "https://advgabrieloliveira.com/",
      stack: ["Wordpress", "Elementor", "CSS", "Figma"],
      date: "12/2025",
    }
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

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <Dialog.Root key={project.id}>
              <Dialog.Trigger>
                <div className="group relative rounded-xl overflow-hidden border border-[#7ff7ff]/20 bg-white/5 cursor-pointer hover:scale-110 duration-300">
                  <img
                    src={project.coverImg}
                    alt={project.title}
                    className="w-full h-70 object-cover duration-150 opacity-80 group-hover:opacity-100 select-none"
                  />
                  <div className="group-hover:opacity-0 absolute inset-0 duration-300 bg-black/80  flex flex-col items-center justify-center gap-4 p-6">
                    <h2 className="text-lg font-bold text-[#7ff7ff]">
                      {project.title}
                    </h2>
                    <div className="flex gap-2 flex-wrap justify-center mt-1">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-full border border-[#7ff7ff]/50 text-[#7ff7ff]/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-60 bg-black/90" />
                <Dialog.Content
                  className="fixed left-1/2 top-1/2 z-70 -translate-x-1/2 -translate-y-1/2
                  w-[95vw] max-w-3xl max-h-[90dvh] sm:max-h-[85vh] overflow-y-auto overscroll-contain
                  bg-[#1c1b2a] rounded-2xl border border-[#7ff7ff]/20
                  shadow-2xl shadow-[#7ff7ff]/10 focus:outline-none
                  data-[state=open]:animate-in data-[state=closed]:animate-out
                  data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
                  data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
                >
                  <div className="flex flex-col gap-4 p-4 sm:gap-6 sm:p-8">
                    <div className="relative w-full">
                      <Dialog.Close asChild>
                        <button
                          type="button"
                          aria-label="Fechar projeto"
                          className="absolute right-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#7ff7ff]/30 bg-[#1c1b2a]/90 text-xl text-[#7ff7ff] transition  sm:right-3 sm:top-3 cursor-pointer"
                        >
                          ×
                        </button>
                      </Dialog.Close>

                      <img
                        className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-xl border border-[#7ff7ff]/20"
                        src={project.coverImg}
                        alt={project.title}
                      />
                    </div>

                    <div className="flex flex-col items-baseline w-full">
                      <h2 className="text-2xl sm:text-3xl text-[#7ff7ff]/90 font-bold">
                        {project.title}
                      </h2>
                      <span className="text-gray-400 mt-2">{project.date}</span>
                      <p className="text-[#7ff7ff]/70 text-base sm:text-lg text-justify my-3">
                        {project.description}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="bg-[#7ff7ff] h-12 px-10 text-[#1c1b2a] font-semibold cursor-pointer hover:bg-[#7ff7ff]/80 transition-all duration-300 w-full sm:w-auto">
                            Ver projeto
                            <img src={openLink} alt="" className="ml-2 w-4" />
                          </Button>
                        </a>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.github && (
                            <Button className="border border-[#7ff7ff] text-[#7ff7ff] bg-transparent h-12 px-10 cursor-pointer hover:bg-[#7ff7ff]/10 transition-all duration-300 w-full sm:w-auto">
                              Ver no Github
                              <img
                                src={githubIcon}
                                alt=""
                                className="ml-2 w-6"
                              />
                            </Button>
                          )}
                        </a>
                      </div>
                    </div>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          ))}
        </div>
      </div>
    </section>
  );
}
