import { useLocation } from "react-router-dom";
import { useTheme } from "../utils/Context/ThemeContext";
import LinkedinIcon from "./common/icons/LinkedinIcon";
import type { JSX } from "react";
import GithubIcon from "./common/icons/GithubIcon";

function Footer(){

    const { theme } = useTheme();
    const currentPath = useLocation().pathname;
    const SocialMediaList: {
        id: number,
        name: string,
        url: string,
        icon: JSX.Element
    }[] =
        [
            {
                id: 1,
                name: "Linkedin",
                url: "https://www.linkedin.com/in/foko-kenmogne-wilfried-0283a825b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRi2McosRQLCPgcVlPwn2pA%3D%3D",
                icon: <LinkedinIcon className="w-8 h-8 text-secondary-dark" />
            }
        ]

    return (
        <div className={`${theme == "dark" ? "" : ""} border-t h-16 border-secondary-dark flex items-center justify-between`}>
            <div className="flex items-center h-full">
                <div className="text-secondary-dark border-r h-full w-fit flex items-center px-2 md:px-8">
                    <p>Find me in: </p>
                </div>
                <div className="flex h-full">
                    {
                        SocialMediaList.map((social) => (
                            <a key={social.id} target="_blank" href={social.url} className="h-full flex items-center border-r relative border-secondary-dark px-4">
                                { social.icon }
                                <div className={`bg-green-300 translate-y-0 w-full h-1 absolute bottom-0 left-0 transition-all duration-150 ease-in-out`}></div>
                            </a>
                        ))
                    }
                </div>
            </div>
            <a href={"https://github.com/FOKO-KENMOGNE-Wilfried"} target="_blank" className={`${currentPath == "/contact-me" ? "text-white" : "text-secondary-dark"} border-l border-secondary-dark h-full px-8 flex gap-4 items-center relative`}>
                <p>@darkwall</p>
                <GithubIcon className="w-8 h-8" />
                <div className={`bg-green-300 translate-y-0 w-full h-1 absolute bottom-0 left-0 transition-all duration-150 ease-in-out`}></div>
            </a>
        </div>
    )
}

export default Footer;