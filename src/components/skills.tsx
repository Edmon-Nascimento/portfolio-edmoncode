import html from "../assets/icons/html5-brands-solid-full.svg"
import css from "../assets/icons/css3-brands-solid-full.svg"
import js from "../assets/icons/js-brands-solid-full.svg"
import react from "../assets/icons/react-brands-solid-full.svg"
import tailwind from "../assets/icons/tailwind-css-brands-solid-full.svg"
import python from "../assets/icons/python-brands-solid-full.svg"
import java from "../assets/icons/java-brands-solid-full.svg"
import firebase from "../assets/icons/fire-solid-full.svg"
import wordpress from "../assets/icons/wordpress-brands-solid-full.svg"
import figma from "../assets/icons/figma-brands-solid-full.svg"


export default function Skills() {
    const skills = [html, css, js, react, tailwind, python, java, firebase, wordpress, figma]
  return (
    <section className="w-full px-10 flex flex-col items-center mt-30">

      <div className="text-white max-w-7xl w-10/12 lg:flex lg:justify-between">
          <h2 className="text-2xl mb-5 md:text-3xl lg:text-4xl">Habilidades</h2>
            {skills.map((skill) =>(
                <div className="grid grid-cols-2 lg:mt-10 lg:max-w-9/12 ">
                    <div className="size-20">
                        <img src={skill} alt="" className="w-full"/>
                    </div>
                </div>
            ))}

      </div>

    </section>
  );
}
