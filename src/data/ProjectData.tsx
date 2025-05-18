import ReactjsIcon from "../components/common/icons/ReactjsIcon";
import TailwindCssIcon from "../components/common/icons/TailwindCssIcon";
import type { ProjectTypes } from "../utils/Types/ProjectTypes";

const ProjectData: ProjectTypes[] = [
  {
    id: 0,
    projectName: "Project_1",
    projectDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium veritatis modi facere odio itaque ullam esse delectus, atque a? Sequi.",
    projectShortDescription: "_test-project",
    projectImage: "",
    projectLink: "",
    projectGithubLink: "",
    projectStack: ["React", "Tailwindcss"],
    projectTechoColor: ["bg-usual-purple", "bg-blue-300"],
    projectTechnoIconList: [<ReactjsIcon className="w-6 h-6" />, <TailwindCssIcon className="w-6 h-6" />]
  }
]

export default ProjectData;