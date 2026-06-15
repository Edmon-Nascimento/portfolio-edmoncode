import whatsapp from "../assets/icons/whatsapp-brands-solid-full.svg"
import email from "../assets/icons/envelope-solid-full.svg"
import linkedin from "../assets/icons/linkedin-brands-solid-full.svg"
import github from "../assets/icons/github-brands-solid-full.svg"

export default function Contact() {

  const contactData = [
    {
      id: 1,
      icon: whatsapp,
      title: "Whatsapp",
      href:""
    },
    {
      id: 2,
      icon: email,
      title: "Email",
      href:""
    },
    {
      id: 3,
      icon: linkedin,
      title: "LinkedIn",
      href:""
    },
    {
      id: 4,
      icon: github,
      title: "Github",
      href:""
    },
  ];

  return (
    <section id="contact" className="w-full px-10 flex flex-col items-center mt-30">
      <div className="text-white max-w-7xl w-10/12 lg:flex lg:justify-between">
        <h2 className="text-2xl mb-5 md:text-3xl lg:text-4xl">Contato</h2>
        <div className="text-justify text-sm md:text-xl lg:text-lg lg:max-w-9/12 lg:mt-10">
        {contactData.map(contact => (
          <div key={contact.id}>
            <strong>{contact.title}</strong>
            <img src={contact.icon} alt={contact.title} />
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
