import { useEffect, useState } from "react";
import ArrowDownIcon from "./common/icons/ArrowDownIcon";
import ReactjsIcon from "./common/icons/ReactjsIcon";
import SelectTechno from "./common/SelectTechno";
import { useProject } from "../utils/Context/ProjectContext";
import type { ProjectNavLink } from "../utils/Types/ProjectTypes";

function ProjectNavBar(){

    const { updateProjectList, filterList } = useProject();
    const [isOpen, setIsOpen] = useState(true);
    const [navLinks, setNavLinks] = useState<ProjectNavLink[]>([
        {
            id: 1,
            name: "React",
            icon: <ReactjsIcon className="w-6 h-6" />,
            isChecked: false
        },
        // {
        //     id: 2,
        //     name: "Vue",
        //     icon: <VuejsIcon className="w-6 h-6" />,
        //     isChecked: false
        // },
    ])

    function updateSearchList(value: string) {
        setNavLinks(navLinks.map((element) => {
            if(element.name == value && !element.isChecked) {
                element.isChecked = true;
            } else if(element.name == value && element.isChecked) {
                element.isChecked = false;
            }
            return element;
        }))
        if(navLinks.filter((element => element.isChecked)).map((element => element.name)).length == 0) {
            updateProjectList(["All"])
        } else {
            updateProjectList(navLinks.filter((element => element.isChecked)).map((element => element.name)))
        }
    }

    useEffect(() => {
        if(filterList.includes("All")) {
            setNavLinks(
                navLinks.map((element) => {
                    element.isChecked = false;
                    return element;
                })
            )
        }
    }, [filterList])

    return (
        <div className="w-full md:w-80 border-b md:border-r border-secondary-dark">
            <div onClick={() => setIsOpen(isOpen ? false : true)} className="flex bg-primary-light-dark md:bg-transparent items-center w-full justify-center md:justify-start h-12 border-b border-secondary-dark pl-8 gap-4">
                <ArrowDownIcon className={`w-6 h-6 ${isOpen ? "rotate-0 md:rotate-0" : "-rotate-90 md:rotate-0"} transition-all duration-150 ease-in-out`} />
                <p>projects</p>
            </div>
            <div className={`md:py-4 flex flex-col items-center md:items-start gap-4 md:h-full ${isOpen ? "py-8" : "py-0 h-0 overflow-hidden"} transition-all duration-150 ease-in-out`}>
                {
                    navLinks.map((link) => (
                        <SelectTechno key={link.id} label={link.name} isChecked={link.isChecked} icon={link.icon} handleClick={() => updateSearchList(link.name)} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectNavBar;