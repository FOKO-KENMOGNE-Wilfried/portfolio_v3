import { useEffect, useState } from "react";
import ArrowDownIcon from "./common/icons/ArrowDownIcon";
import ReactjsIcon from "./common/icons/ReactjsIcon";
// import VuejsIcon from "./common/icons/VuejsIcon";
import SelectTechno from "./common/SelectTechno";
import { useProject } from "../utils/Context/ProjectContext";
import type { ProjectNavLink } from "../utils/Types/ProjectTypes";

function ProjectNavBar(){

    const { updateProjectList, filterList } = useProject()

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
        console.log(filterList)
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
        <div className="w-80 border-r border-secondary-dark">
            <div className="flex items-center w-full h-12 border-b border-secondary-dark pl-8 gap-4">
                <ArrowDownIcon className="w-6 h-6" />
                <p>projects</p>
            </div>
            <div className="py-4 flex flex-col gap-4">
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