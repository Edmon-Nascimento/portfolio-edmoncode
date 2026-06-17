export default function About() {
  return (
    <section className="w-full px-10 flex flex-col items-center" id="about">
      <div className="text-white max-w-7xl w-10/12 mt-30">
        <h2 className="text-2xl mb-8 md:text-3xl lg:text-4xl">
          Sobre <span className="text-[#7ff7ff]">mim</span>
        </h2>

        <div className="border-l-2 mx-auto border-[#7ff7ff]/40 pl-6 flex flex-col gap-6 text-sm md:text-base lg:text-lg text-white/80 text-justify lg:max-w-3xl">
          <p>
            Desenvolvedor Front-End com foco em React.js, TypeScript e
            JavaScript moderno. Atuo na criação de aplicações web responsivas e
            performáticas, utilizando componentização, integração com APIs REST
            e boas práticas de desenvolvimento para construir interfaces
            escaláveis, acessíveis e de fácil manutenção.
          </p>
          <p>
            Tenho forte interesse em arquitetura front-end, experiência do
            usuário e qualidade de software, buscando desenvolver soluções que
            unam desempenho, usabilidade e código sustentável. Também venho
            expandindo minha atuação para o desenvolvimento back-end, ampliando
            minha capacidade de construir aplicações completas e bem
            estruturadas.
          </p>
        </div>
      </div>
    </section>
  );
}
