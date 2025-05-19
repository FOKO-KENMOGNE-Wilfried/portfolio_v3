import { useTheme } from "../utils/Context/ThemeContext";
import { NavLink, useLocation } from "react-router-dom";

function Header(){

    const currentPath = useLocation().pathname;
    const { theme } = useTheme();
    const navLinks: {
        id: number,
        name: string,
        path: string,
    }[] =
        [
            {
                id: 1,
                name: "_hello",
                path: "/",
            },
            {
                id: 2,
                name: "_about-me",
                path: "/about-me",
            },
            {
                id: 3,
                name: "_project",
                path: "/my-project",
            }
        ]

    return (
        <div className={`${theme == "dark" ? "" : ""} border-b h-16 border-secondary-dark flex items-center justify-between`}>
            <div className="flex items-center h-full">
                <NavLink to={"/"} className="text-secondary-dark py-8 border-r h-full w-80 flex items-center px-8">
                    <p>FOKO KENMOGNE Wilfried</p>
                </NavLink>
                <div className="flex h-full">
                    {
                        navLinks.map((link) => (
                            <NavLink key={link.id} to={link.path} className={`${link.path == currentPath ? "text-white" : "text-secondary-dark"} relative border-r border-secondary-dark h-full px-8 flex items-center`}>
                                <p>{ link.name }</p>
                                <div className={`${link.path == currentPath ? "bg-usual-orange translate-y-0" : " -translate-y-4"} h-1 w-full absolute bottom-0 left-0 transition-all duration-150 ease-in-out`}></div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
            <NavLink to={"/contact-me"} className={`${currentPath == "/contact-me" ? "text-white" : "text-secondary-dark"} relative border-l border-secondary-dark h-full px-8 flex items-center`}>
                <p>_contact-me</p>
                <div className={`${currentPath == "/contact-me" ? "bg-usual-orange translate-y-0" : " translate-y-4"} h-1 w-full absolute bottom-0 left-0 transition-all duration-75 ease-in-out`}></div>
            </NavLink>
        </div>
    )
}

export default Header;