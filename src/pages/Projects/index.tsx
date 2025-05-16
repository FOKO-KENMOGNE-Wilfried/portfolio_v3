import { useTheme } from "../../utils/Context/ThemeContext";

function Projects(){

    const { theme } = useTheme();

    return (
        <div className={`${theme == "dark" ? "" : ""} p-16`}>Projects</div>
    )
}

export default Projects;