import { useEffect, useState } from "react";
import ProjectCard from "../../components/common/ProjectCard";
import ProjectData from "../../data/ProjectData";
import { useTheme } from "../../utils/Context/ThemeContext";
import { useProject } from "../../utils/Context/ProjectContext";
import CloseIcon from "../../components/common/icons/CloseIcon";

function Projects(){

    const { theme } = useTheme();
    const { filterList, updateProjectList } = useProject()
    const [projectList, setProjectList] = useState(ProjectData);

    useEffect(() => {
        if (filterList.includes("All")) {
            setProjectList(ProjectData); // Remet la liste complète
        } else {
            const filteredProjects = ProjectData.filter(project =>
                project.projectStack.some(stack => filterList.includes(stack))
            );
            setProjectList(filteredProjects);
        }
    }, [filterList]);



    return (
        <div className={`${theme == "dark" ? "" : ""} w-full overflow-y-scroll mb-4 md:mb-8 h-full md:max-h-fit`}>
            <div className="hidden md:block sticky top-0 bg-primary-dark z-50 w-full border-b border-secondary-dark h-12">
                <div className="text-primary-light flex items-center w-fit h-full pr-4 min-w-32 border-r border-secondary-dark">
                    <div className="flex  cursor-default justify-center items-center px-4  h-full w-full">
                        {filterList.map((filter, _index) => (
                            <p key={_index} className="">__{filter}</p>
                        ))}
                    </div>
                    <div className="cursor-pointer hover:bg-primary-light rounded-full flex items-center justify-center w-4 h-4 hover:text-black transition-all duration-150 ease-in-out" onClick={() => updateProjectList(["All"])}>
                        <CloseIcon className="w-4 h-4" />
                    </div>
                </div>
            </div>
            <div className="md:p-16 mt-8 justify-center items-center md:items-start md:justify-start py-8 md:py-0 mb-4 flex gap-y-8 gap-x-4 flex-wrap">
                {
                    projectList.map((element) => (
                        <ProjectCard key={element.id} projectData={element} />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;