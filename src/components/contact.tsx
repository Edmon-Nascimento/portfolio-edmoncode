import whatsapp from "../assets/icons/whatsapp-brands-solid-full.svg"
import email from "../assets/icons/envelope-solid-full.svg"
import linkedin from "../assets/icons/linkedin-brands-solid-full.svg"
import github from "../assets/icons/github-brands-solid-full.svg"

export default function Contact() {

  const contactData = [
    { id: 1, icon: whatsapp, title: "Whatsapp", href: "" },
    { id: 2, icon: email, title: "Email", href: "" },
    { id: 3, icon: linkedin, title: "LinkedIn", href: "" },
    { id: 4, icon: github, title: "Github", href: "" },
  ];

  return (
    <section id="contact" className="w-full px-10 flex flex-col items-center my-30">
      <div className="text-white max-w-7xl w-10/12 flex flex-col">
        <h2 className="text-2xl mb-8 md:text-3xl lg:text-4xl">
          Entre em <span className="text-[#7ff7ff]">contato</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:mt-10">
          {contactData.map(contact => (
            <a
              key={contact.id}
              href={contact.href}
              target="_blank"
              className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-[#7ff7ff]/20 bg-white/5 hover:border-[#7ff7ff]/60 hover:bg-[#7ff7ff]/10 transition-all duration-300"
            >
              <div className="size-10">
                <img src={contact.icon} alt={contact.title} className="w-full" />
              </div>
              <span className="text-sm text-white/70 group-hover:text-[#7ff7ff] transition-colors duration-300">
                {contact.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}