import { Button } from "@/components/ui/button";
import commitIcon from "../assets/icons/commit.svg";
import profile from "../assets/images/profile.png";
import PixelBlast from "./ui/PixelBlast";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Hero() {
  const role = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = role.current;
    if (!el) return;
    el.innerHTML = "";
    const typed = new Typed(el, {
      strings: ["Desenvolvedor Front-End", "Desenvolvedor React", "Desenvolvedor TypeScript", "Entusiasta UI/UX"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: false,
    });
    return () => {
      typed.destroy();
      el.innerHTML = "";
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full px-10 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-1 pointer-events-none hidden lg:block bg-linear-to-r from-[#1c1b2a]/85 via-[#1c1b2a]/40 to-transparent" />
      <div className="absolute inset-0 z-0">
        <PixelBlast
          color="#7ff7ff"
          pixelSize={4}
          variant="square"
          patternDensity={1}
          patternScale={2}
          speed={0.5}
          edgeFade={0.25}
          enableRipples={true}
          rippleSpeed={0.25}
          rippleIntensityScale={0.8}
          transparent={true}
          className="invisible lg:visible opacity-60"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-between gap-10 w-10/12 md:flex-row-reverse lg:max-w-7xl">
        <div className="relative flex items-center justify-center">
          <div className="absolute size-64 lg:size-110 rounded-full bg-[#7ff7ff]/10 blur-2xl" />
          <div className="relative size-48 md:size-56 lg:size-100 rounded-full border-2 border-[#7ff7ff]/40 p-1">
            <img
              src={profile}
              alt="Edmon Nascimento"
              className="w-full h-full rounded-full object-cover object-top backdrop-blur-sm"
            />
          </div>
        </div>

        <div className="text-white text-center md:text-left">
          <p className="text-3xl font-bold mb-2 lg:text-6xl ">
            Edmon <span className="text-[#7ff7ff]">Nascimento</span>
          </p>
          <p ref={role} className="text-xl text-white/90 mb-6 lg:text-2xl">
          </p>
          <p className="max-w-lg hidden md:block mb-10 text-white/90 lg:text-lg leading-relaxed">
            Desenvolvendo experiências web modernas com foco em performance,
            usabilidade e código escalável.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#projects">
              <Button className="bg-[#7ff7ff] h-12 px-10 text-[#1c1b2a] font-semibold cursor-pointer hover:bg-[#7ff7ff]/80 transition-all duration-300 w-full sm:w-auto">
                Ver projetos
                <img src={commitIcon} alt="" className="ml-2 w-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button className="border border-[#7ff7ff] text-[#7ff7ff] bg-transparent h-12 px-10 cursor-pointer hover:bg-[#7ff7ff]/10 transition-all duration-300 w-full sm:w-auto">
                Contato
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-[#7ff7ff] animate-bounce" />
        </div>
      </div>
    </main>
  );
}

