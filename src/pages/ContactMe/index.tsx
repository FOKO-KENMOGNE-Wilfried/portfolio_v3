import { useTheme } from "../../utils/Context/ThemeContext";

function ContactMe(){

    const { theme } = useTheme();

    return (
        <div className={`${theme == "dark" ? "" : ""}`}>ContactMe</div>
    )
}

export default ContactMe;