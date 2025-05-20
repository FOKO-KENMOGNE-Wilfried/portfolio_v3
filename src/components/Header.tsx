import { useTheme } from "../utils/Context/ThemeContext";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

function Header() {
    const currentPath = useLocation().pathname;
    const { theme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { id: 1, name: "_hello", path: "/" },
        { id: 2, name: "_about-me", path: "/about-me" },
        { id: 3, name: "_project", path: "/my-project" },
    ];

    // Bloque le scroll quand le menu est ouvert
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    }, [isMobileMenuOpen]);

    return (
        <header className={`border-b h-16 border-secondary-dark flex items-center justify-between z-50 ${theme === "dark" ? "" : ""}`}>
            <NavLink to={"/"} className="text-secondary-dark hidden md:flex py-8 border-r h-full w-96 items-center px-4 md:px-8">
                <p>FOKO KENMOGNE Wilfried</p>
            </NavLink>

            <nav className="hidden md:flex h-full justify-between w-full">
                <div className="flex ">
                    {navLinks.map(link => (
                        <NavLink
                            key={link.id}
                            to={link.path}
                            className={`relative h-full flex items-center px-8 border-r border-secondary-dark ${
                                link.path === currentPath ? "text-white" : "text-secondary-dark"
                            }`}
                        >
                            <p>{link.name}</p>
                            <div className={`absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ${
                                link.path === currentPath ? "bg-usual-orange translate-y-0" : "-translate-y-4"
                            }`}></div>
                        </NavLink>
                    ))}
                </div>
                <NavLink
                    to="/contact-me"
                    className={`hidden md:flex relative border-l border-secondary-dark h-full px-8 items-center ${
                        currentPath === "/contact-me" ? "text-white" : "text-secondary-dark"
                    }`}
                >
                    <p>_contact-me</p>
                    <div className={`absolute bottom-0 left-0 w-full h-1 transition-all duration-75 ${
                        currentPath === "/contact-me" ? "bg-usual-orange translate-y-0" : "translate-y-4"
                    }`}></div>
                </NavLink>
            </nav>


            <button
                className="md:hidden text-secondary-dark z-50"
                onClick={() => setIsMobileMenuOpen(prev => !prev)}
            >
                <Icon icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"} width={28} height={28} />
            </button>

            {isMobileMenuOpen && (
                <div className="fixed bg-primary-dark top-0 left-0 w-full h-screen bg-background z-40 flex flex-col items-center justify-center">
                    <nav className="flex flex-col items-center gap-6">
                        {navLinks.map(link => (
                            <NavLink
                                key={link.id}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-2xl ${
                                    link.path === currentPath ? "text-white" : "text-secondary-dark"
                                }`}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <NavLink
                            to="/contact-me"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`text-2xl ${
                                currentPath === "/contact-me" ? "text-white" : "text-secondary-dark"
                            }`}
                        >
                            _contact-me
                        </NavLink>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;
