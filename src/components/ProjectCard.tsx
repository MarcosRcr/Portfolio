import { FaGithub } from "react-icons/fa6";
import Badge from "./Badge";
import { IoIosLink } from "react-icons/io";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tecnologies: string[];
}

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="flex text-pretty border border-black rounded-xl h-64 overflow-hidden items-center gap-3 max-md:flex-col max-md:h-[20  rem] max-md:px-4">
      <a href={props.github} target="_blank"><img src={props.image} alt={props.title} className=" w-96 h-64 max-md:h-48 max-sm:h-32" /></a>
      <div className="flex flex-col items-start justify-center gap-2 max-sm:px-96 ">
        <h3 className="text-2xl font-medium max-sm:text-center">{props.title}</h3>
        <p className="w-96 max-sm:hidden">{props.description}</p>
        <div className="">
          {" "}
          {props.tecnologies.map((tecnology) => (
            <Badge key={tecnology} title={tecnology} />
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={props.link}
            target="_blank"
            className="flex items-center justify-center gap-4 bg-slate-100 border border-black w-24 text-center rounded-full"
          >
            Site
            <IoIosLink/>
          </a>
          <a
            href={props.github}
            target="_blank"
            className="flex items-center justify-center gap-4 bg-slate-800 text-white border border-black w-24 text-center rounded-full"
          >
            Github <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};
