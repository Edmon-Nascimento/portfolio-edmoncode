import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import menuIcon from "../assets/icons/bars-solid-full.svg";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Sobre", id: "about" },
  { label: "Habilidades", id: "skills" },
  { label: "Projetos", id: "projects" },
  { label: "Contato", id: "contact" },
];

const HEADER_HEIGHT = 80;

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="p-6 border-b bg-black/30 backdrop-blur-md border-[#7ff7ff]/20 lg:px-10 h-20 fixed w-screen z-50">
      <Sheet open={open} onOpenChange={setOpen}>
        <div className="flex justify-between items-center h-full">
          <a href="#home">
            <h1 className="text-white text-2xl font-bold">
              EDMON<span className="text-[#7ff7ff]">CODE</span>
            </h1>
          </a>

          <SheetTrigger className="flex lg:hidden">
            <Button className="cursor-pointer bg-transparent border border-[#7ff7ff]/30 hover:border-[#7ff7ff] hover:bg-[#7ff7ff]/10 transition-all duration-300">
              <img src={menuIcon} alt="Menu" className="w-5" />
            </Button>
          </SheetTrigger>

          <nav className="hidden lg:flex gap-10">
            {NAV_ITEMS.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
                className="text-white/70 text-lg hover:text-[#7ff7ff] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#7ff7ff] after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <SheetContent className="bg-[#1c1b2a]/80 backdrop-blur-md border-[#7ff7ff]/20 pt-15 pl-5 flex flex-col gap-8">
          {NAV_ITEMS.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                setTimeout(() => scrollToSection(id), 300);
              }}
              className="text-white/70 text-2xl hover:text-[#7ff7ff] transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </SheetContent>
      </Sheet>
    </header>
  );
}
