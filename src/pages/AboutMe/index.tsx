import { useTheme } from "../../utils/Context/ThemeContext";

function AboutMe(){

    const { theme } = useTheme();

    return (
        <div className={`${theme == "dark" ? "" : ""}`}>AboutMe</div>
    )
}

export default AboutMe;