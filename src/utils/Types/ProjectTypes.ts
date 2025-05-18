import type { JSX } from "react";

export interface ProjectTypes{
    id: number,
    projectName: string,
    projectDescription: string,
    projectShortDescription?: string,
    projectImage: string,
    projectLink: string,
    projectGithubLink: string,
    projectTechoColor: string[],
    projectStack: string[],
    projectTechnoIconList: JSX.Element[]
}

export interface ProjectNavLink {
    id: number,
    name: string,
    icon: JSX.Element,
    isChecked: boolean
}