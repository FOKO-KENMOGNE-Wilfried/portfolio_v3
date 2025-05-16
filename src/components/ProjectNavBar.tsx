import type { JSX } from "react";
import ArrowDownIcon from "./common/icons/ArrowDownIcon";
import ReactjsIcon from "./common/icons/ReactjsIcon";
import VuejsIcon from "./common/icons/VuejsIcon";
import SelectTechno from "./common/SelectTechno";

function ProjectNavBar(){

    const navLinks: {
        id: number,
        name: string,
        icon: JSX.Element,
        isChecked: boolean
    }[] = [
        {
            id: 1,
            name: "React",
            icon: <ReactjsIcon className="w-6 h-6" />,
            isChecked: false
        },
        {
            id: 2,
            name: "Vue",
            icon: <VuejsIcon className="w-6 h-6" />,
            isChecked: false
        },
    ]

    const searchList: string[] = []

    return (
        <div className="w-80 border-r border-secondary-dark">
            <div className="flex items-center w-full h-12 border-b border-secondary-dark pl-8 gap-4">
                <ArrowDownIcon className="w-6 h-6" />
                <p>projects</p>
            </div>
            <div className="py-4 flex flex-col gap-4">
                {
                    navLinks.map((link) => (
                        <SelectTechno id={link.id} label={link.name} isChecked={link.isChecked} icon={link.icon} handleClick={() => null} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectNavBar;