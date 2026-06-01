import { Button } from "@/components/ui/button";
import commitIcon from "../assets/icons/commit.svg";

export default function Hero() {
  return (
    <main className="min-h-screen w-full px-10 flex flex-col items-center pt-30 md:pt-45 lg:pt-60">
      <div className="flex flex-col items-center justify-between w-10/12 md:flex-row-reverse lg:max-w-7xl">
        <img
          src=""
          alt=""
          className="mb-8 size-60 rounded-full border lg:mb-0"
        />

        <div className=" text-white text-center lg:text-left">
          <p className="text-white text-2xl mb-2 lg:text-6xl">Edmon Nascimento</p>
          <p className="text-white text-xl mb-8 lg:mb-5 lg:text-4xl">Desenvolvedor front-end</p>
          <p className="max-w-lg hidden lg:block mb-10 lg:text-lg">
            Desenvolvendo experiências web modernas com foco em performance,
            usabilidade e código escalável.
          </p>

          <div className="flex flex-col gap-5 lg:flex-row lg:gap-5">
            <Button className="bg-[#7ff7ff] h-12 px-10 text-black cursor-pointer">
              Ver projetos
              <img src={commitIcon} alt="" />
            </Button>
            <Button className="ring ring-[#7ff7ff] h-12 px-10 cursor-pointer">
              Contato
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
