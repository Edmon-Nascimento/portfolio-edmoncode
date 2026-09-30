export default function About() {
  return (
    <section className="w-full px-10 flex flex-col items-center" id="about">
      <div className="text-white max-w-7xl w-10/12 mt-30">
        <h2 className="text-2xl mb-8 md:text-3xl lg:text-4xl">
          Sobre <span className="text-[#7ff7ff]">mim</span>
        </h2>

        <div className="border-l-2 mx-auto border-[#7ff7ff]/40 pl-6 flex flex-col gap-6 text-sm md:text-base lg:text-lg text-white/80 text-justify lg:max-w-3xl">
          <p>
            Desenvolvedor Fullstack com experiência em React, Next.js,
            TypeScript e Java, atuando na construção de aplicações web modernas,
            responsivas e escaláveis. Trabalho com desenvolvimento de
            interfaces, integração com APIs REST, desenvolvimento back-end e
            organização de código, buscando aplicar boas práticas e soluções de
            fácil manutenção.
          </p>
          <p>
            Tenho experiência com componentização, integração entre serviços,
            autenticação, persistência de dados e desenvolvimento de
            funcionalidades completas do frontend ao backend. Também utilizo
            ferramentas como Docker, PostgreSQL e Git no desenvolvimento dos
            projetos, com foco em qualidade de software, performance e evolução
            contínua das aplicações.
          </p>
        </div>
      </div>
    </section>
  );
}
