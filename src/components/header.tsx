import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import menuIcon from "../assets/icons/bars-solid-full.svg";

export default function Header() {
  return (
    <header className="p-4 border-b bg-[#1c1b2a]">
      <Sheet>
        <div className="flex justify-between">
          <h1 className="text-white text-2xl font-bold">EDMON<span className="text-[#7ff7ff]">CODE</span></h1>
          <SheetTrigger className="flex">
            <Button className="cursor-pointer">
              <img src={menuIcon} alt="" className="w-5"/>
            </Button>
          </SheetTrigger>
        </div>

        <SheetContent className=" bg-[#1c1b2a]/80 pt-15 pl-5 flex flex-col gap-10">
          <a href="" className="text-white text-2xl">Sobre</a>
          <a href="" className="text-white text-2xl">Habilidades</a>
          <a href="" className="text-white text-2xl">Projetos</a>
          <a href="" className="text-white text-2xl">Contato</a>
        </SheetContent>
      </Sheet>
    </header>
  );
}
