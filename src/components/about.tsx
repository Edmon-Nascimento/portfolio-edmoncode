export default function About() {
  return (
    <section className="w-full px-10 flex flex-col items-center" id="about">
      <div className="text-white max-w-7xl w-10/12 lg:flex lg:justify-between">
        <h2 className="text-2xl mb-5 md:text-3xl lg:text-4xl">Sobre mim</h2>
        <div className="text-justify text-sm md:text-xl lg:text-lg lg:max-w-9/12 lg:mt-10">
          <p>
            Desenvolvedor Front-End com foco em React.js, TypeScript e
            JavaScript moderno. Atuo na criação de aplicações web responsivas e
            performáticas, utilizando componentização, integração com APIs REST
            e boas práticas de desenvolvimento para construir interfaces
            escaláveis, acessíveis e de fácil manutenção.
          </p>
          <br />
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
