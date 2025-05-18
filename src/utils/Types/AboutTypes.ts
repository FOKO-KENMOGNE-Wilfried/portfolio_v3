import type { JSX } from "react";

export interface AboutFile {
    id: number;
    name: string;
    isActive: boolean;
    icon?: JSX.Element;
    data: string;
}
export interface AboutInfo {
    id: number;
    name: string;
    isActive: boolean;
    files: AboutFile[];
}
export interface AboutContent {
    id: number;
    name: string;
    info: AboutInfo[];
    isDirectlyDisplayContent?: boolean;
}
export interface AboutMainObject {
    id: number;
    name: string;
    icon: JSX.Element;
    isActive: boolean;
    contents: AboutContent[];
}