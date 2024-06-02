import {
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaTrello,
  FaWhatsapp,
} from "react-icons/fa6";
import { Header } from "./components/Header";
import { ProjectCard } from "./components/ProjectCard";
import { Section } from "./components/Section";
import { Spacer } from "./components/Spacer";
import "./index.css";
import { RiNextjsFill } from "react-icons/ri";
import { SiMicrosoftexcel, SiPostgresql } from "react-icons/si";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Spacer title="Projects" />
      <Section tailwind="flex-wrap">
        <ProjectCard
          title="EncrypMe"
          description="Challenge by Oracle Next Education. This challenge encrypts the vowels a,e,i and u to transform them to ai, enter, imes, ober and ufat. "
          image="/encrypMe.png"
          link="https://marcosrcr.github.io/encriptador-ONE/"
          github="https://github.com/MarcosRcr/encriptador-ONE"
          tecnologies={["HTML", "CSS", "JavaScript"]}
        />
        <ProjectCard
          title="Age Calculator"
          description="This is a simple age calculator that calculates the age of a person based on the date of birth."
          image="/age-calculator.png"
          link="https://marcosrcr.github.io/age-calculator-app/"
          github="https://github.com/MarcosRcr/age-calculator-app"
          tecnologies={["HTML", "CSS", "JavaScript"]}
        />
        <ProjectCard
          title="Number Recognition"
          description="Machine learning project that recognizes numbers from 0 to 9 drawn by the user, the model was created in python using jupyter and linear algebra techniques such as singular value decomposition."
          image="/numbers.png"
          link="https://reconocimiento-de-numeros.vercel.app/"
          github="https://github.com/MarcosRcr/Reconocimiento-de-numeros"
          tecnologies={["HTML", "CSS", "JavaScript", "Python"]}
        />
      </Section>
      <Spacer title="About" />
      <Section tailwind="flex-wrap">
        <div className="">
          <h3 className="font-semibold text-2xl text-center">About me</h3>
          <p className="text-2xl text-center w-[40rem] max-sm:w-[20rem]">
            I am a computer engineering student, during my career I have worked
            as a freelance web developer. I am a creative person, resolute and
            with great ability to adapt. I consider myself a professional when
            working in a team, with excellent communication and collaboration
            skills. I love to work together with other professionals from
            different fields to achieve common objectives.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center border rounded-xl border-slate-400 max-sm:border-none w-[35rem]">
          <h3 className="font-semibold text-2xl text-center">
            Software / Frameworks
          </h3>
          <ul className="flex flex-wrap justify-center py-8 text-2xl gap-10 w-[30rem] ">
            <li className="flex flex-col justify-center items-center gap-1 hover:scale-95 transition-transform cursor-default">
              <FaGithub /> GitHub
            </li>
            <li className="flex flex-col justify-center items-center gap-1 hover:scale-95 transition-transform cursor-default">
              <FaGitAlt /> Git
            </li>
            <li className="flex flex-col justify-center items-center gap-1 hover:scale-95 transition-transform cursor-default">
              <FaTrello /> Trello
            </li>
            <li className="flex flex-col justify-center items-center gap-1 hover:scale-95 transition-transform cursor-default">
              <FaFigma /> Figma
            </li>
            <li className="flex flex-col justify-center items-center gap-1 hover:scale-95 transition-transform cursor-default">
              <RiNextjsFill /> Next.js
            </li>
            <li className="flex flex-col justify-center items-center gap-1 hover:scale-95 transition-transform cursor-default">
              <FaReact /> React
            </li>
            <li className="flex flex-col justify-center items-center gap-1 hover:scale-95 transition-transform cursor-default">
              <SiPostgresql /> PostgreSQL
            </li>
            <li className="flex flex-col justify-center items-center gap-1 hover:scale-95 transition-transform cursor-default">
              <SiMicrosoftexcel /> Microsoft Excel
            </li>
          </ul>
        </div>
        <div className="border rounded-xl border-slate-400 max-sm:border-none">
          <h3 className="font-semibold text-2xl text-center">Skills</h3>
          <ul className="flex flex-wrap justify-center py-8 text-2xl gap-10 w-[40rem] max-sm:w-[24rem]">
            <li className="flex flex-col justify-center items-center gap-1">
              Design Thinking
            </li>
            <li className="flex flex-col justify-center items-center gap-1">
              Teamwork
            </li>
            <li className="flex flex-col justify-center items-center gap-1">
              Agile methodologies
            </li>
            <li className="flex flex-col justify-center items-center gap-1">
              Communication
            </li>
            <li className="flex flex-col justify-center items-center gap-1">
              Web design
            </li>
            <li className="flex flex-col justify-center items-center gap-1">
              Adaptability
            </li>
            <li className="flex flex-col justify-center items-center gap-1">
              Management of databases
            </li>
          </ul>
        </div>
      </Section>
      <Spacer title="Contact" />
      <Section>
        <Contact />
        <div className="mr-96 max-sm:mr-0 flex flex-col gap-5">
          <h3 className="text-2xl mb-10">Other ways to contact me:</h3>
          <ul className="flex-col flex gap-3 text-xl">
            <li >
              <a className="flex gap-2 items-baseline" href="mailto:marcosr.cr19@gmail.com" target="_blank">
              Email: 
                marcosr.cr19@gmail.com
              </a>
            </li>
            <li >
              <a href="https://www.linkedin.com/in/marcos-cuellar/" className="flex items-center gap-2" target="_blank">
              LinkedIn
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://wa.me/5569007372" className="flex items-center gap-2" target="_blank">
                Whatsapp
                <FaWhatsapp/>
              </a>
            </li>
          </ul>
        </div>
      </Section>
      <Footer/>
    </>
  );
};

export default App;
