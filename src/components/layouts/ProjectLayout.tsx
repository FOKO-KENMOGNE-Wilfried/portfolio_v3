import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { useTheme } from "../../utils/Context/ThemeContext";
import ProjectNavBar from "../ProjectNavBar";

function ProjectLayout(){

    const { theme } = useTheme();

    return (
        <div className="flex w-full">
                <div className={`h-screen w-full flex flex-col justify-between overflow-hidden ${theme == "dark" ? "bg-primary-dark text-primary-light" : "bg-primary-light text-primary-dark"}`}>
                    <Header />
                    <div className="flex h-full w-full">
                        <ProjectNavBar />
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
    )
}

export default ProjectLayout;