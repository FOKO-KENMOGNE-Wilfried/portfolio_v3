import { createContext, useContext, useState, type ReactNode } from "react";

interface ProjectContextType {
    filterList: string[]
    updateProjectList: (newList: string[]) => void
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

function ProjectProvider({ children } : { children: ReactNode }) {

    const [filterList, setFilterList] = useState(["All"])
    function updateProjectList(newFilterList: string[]) {
        setFilterList(newFilterList);
    }

    return (
        <ProjectContext.Provider value={{ filterList, updateProjectList }}>
            { children }
        </ProjectContext.Provider>
    )
}

export const useProject = () => {
    const context = useContext(ProjectContext);
    if(!context) {
        throw new Error("useProject must be used within an ProjectProvider");
    }
    return context;
}

export default ProjectProvider;