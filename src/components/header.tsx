import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import menuIcon from "../assets/icons/bars-solid-full.svg";

export default function Header() {
  return (
    <header className="p-6 border-b bg-black/30 backdrop-blur-sm border-[#7ff7ff]/20 lg:px-10 h-20 fixed w-screen">
      <Sheet>
        <div className="flex justify-between">
          <h1 className="text-white text-2xl font-bold">
            EDMON<span className="text-[#7ff7ff]">CODE</span>
          </h1>

          <SheetTrigger className="flex lg:hidden">
            <Button className="cursor-pointer">
              <img src={menuIcon} alt="" className="w-5" />
            </Button>
          </SheetTrigger>
          <nav className="hidden lg:flex gap-10">
            <a href="#about" className="text-white text-xl">
              Sobre
            </a>
            <a href="#skills" className="text-white text-xl">
              Habilidades
            </a>
            <a href="#projects" className="text-white text-xl">
              Projetos
            </a>
            <a href="#contact" className="text-white text-xl">
              Contato
            </a>
          </nav>
        </div>

        <SheetContent className=" bg-[#1c1b2a]/30  border-[#7ff7ff]/20 pt-15 pl-5 flex flex-col gap-10">
          <a href="#about" className="text-white text-2xl">
            Sobre
          </a>
          <a href="#skills" className="text-white text-2xl">
            Habilidades
          </a>
          <a href="#projects" className="text-white text-2xl">
            Projetos
          </a>
          <a href="#contact" className="text-white text-2xl">
            Contato
          </a>
        </SheetContent>
      </Sheet>
    </header>
  );
}
