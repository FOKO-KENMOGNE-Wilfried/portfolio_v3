import GithubIcon from "./icons/GithubIcon"
import characterReduce from "../../utils/functions/CharacterReduce"
import type { ProjectTypes } from "../../utils/Types/ProjectTypes"

function ProjectCard( { projectData } : { projectData: ProjectTypes } ){
    return (
        <div className="flex flex-col gap-4 w-fit h-fit">
            <div className="h-full">
                <p className="text-secondary-dark"><span className="text-usual-purple font-semibold">{projectData.projectName}</span> // {projectData.projectShortDescription}</p>
            </div>
            <div className="w-96 h-80 rounded-lg transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-usual-orange overflow-hidden border border-secondary-dark">
                <div className="w-full h-1/2 bg-black border-b-2 border-secondary-dark relative">
                        <div className="absolute top-2 right-2 flex gap-2">
                            {
                                projectData.projectTechnoIconList.map((icon, _index) => (
                                    <div key={_index} className={`w-fit p-1 ${projectData.projectTechoColor[_index]} rounded-sm flex gap-2`}>{icon}</div>
                                ))
                            }
                        </div>
                    {/* <img src="" alt="" /> */}
                </div>
                <div className="h-1/2 p-4 flex flex-col justify-between">
                    <p>{characterReduce(projectData.projectDescription, 135)}</p>
                    <div className="flex justify-between items-center">
                        {
                            projectData.projectLink ? (
                                <a href={projectData.projectLink} target="_blanck" className="px-4 py-2 w-fit rounded-md text-primary-light bg-secondary-dark cursor-pointer">view-project</a>
                            ) : <div className="hidden"></div>
                        }
                        {
                            projectData.projectLink ? (
                                <a href={projectData.projectGithubLink} target="_blanck" className="w-10 h-10 bg-usual-purple flex items-center justify-center rounded-md"><GithubIcon className="w-6 h-6" /></a>
                            ) : <div className="hidden"></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard