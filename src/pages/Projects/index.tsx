import { useTheme } from "../../utils/Context/ThemeContext";

function Projects(){

    const { theme } = useTheme();

    return (
        <div className={`${theme == "dark" ? "" : ""}`}>Projects</div>
    )
}

export default Projects;