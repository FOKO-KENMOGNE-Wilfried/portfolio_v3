import ReactjsIcon from "../components/common/icons/ReactjsIcon";
import TailwindCssIcon from "../components/common/icons/TailwindCssIcon";
import type { ProjectTypes } from "../utils/Types/ProjectTypes";

const ProjectData: ProjectTypes[] = [
  {
    id: 0,
    projectName: "Project_1",
    projectDescription: "Realisation d'un portfolio personnaliser pour la presentation de ma personne, mes competences ainsi que mes apirations",
    projectShortDescription: "_my-portfolio",
    projectImage: "/images/portfolio_image.png",
    projectLink: "",
    projectGithubLink: "https://github.com/FOKO-KENMOGNE-Wilfried/portfolio_v3.git",
    projectStack: ["React", "Tailwindcss"],
    projectTechoColor: ["bg-usual-purple", "bg-blue-300"],
    projectTechnoIconList: [<ReactjsIcon className="w-6 h-6" />, <TailwindCssIcon className="w-6 h-6" />]
  }
]

export default ProjectData;