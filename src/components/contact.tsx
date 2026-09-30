import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const contactData = [
    {
      id: 1,
      icon: faWhatsapp,
      title: "Whatsapp",
      href: "https://wa.me/5571982580281",
    },
    {
      id: 2,
      icon: faEnvelope,
      title: "Email",
      href: "mailto:edmoncode7@gmail.com",
    },
    {
      id: 3,
      icon: faLinkedin,
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/edmon-nascimento/",
    },
    {
      id: 4,
      icon: faGithub,
      title: "Github",
      href: "https://github.com/Edmon-Nascimento",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full px-10 flex flex-col items-center my-30"
    >
      <div className="text-white max-w-7xl w-10/12 flex flex-col">
        <h2 className="text-2xl mb-8 md:text-3xl lg:text-4xl">
          Entre em <span className="text-[#7ff7ff]">contato</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:mt-10">
          {contactData.map((contact) => (
            <a
              key={contact.id}
              href={contact.href}
              target="_blank"
              className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-[#7ff7ff]/20 bg-white/5 hover:border-[#7ff7ff]/60 hover:bg-[#7ff7ff]/10 transition-all duration-300"
            >
              <div className="size-10 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={contact.icon}
                  aria-label={contact.title}
                  className="size-8! text-[#7ff7ff]"
                />
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
