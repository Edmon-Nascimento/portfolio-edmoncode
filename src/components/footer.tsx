export default function Footer() {
  return (
    <footer className="p-6 border-t bg-black/30 backdrop-blur-md border-[#7ff7ff]/20 lg:px-10 w-full">
      <p className="text-center text-white/50 text-sm">
        &copy; 2026 Todos os direitos reservados |{" "}
        <a
          href="https://linktree-edmoncode.vercel.app/"
          target="_blank"
          className="font-bold text-white/70 hover:text-[#7ff7ff] transition-colors duration-300"
        >
          EDMONCODE
        </a>
      </p>
    </footer>
  );
}
