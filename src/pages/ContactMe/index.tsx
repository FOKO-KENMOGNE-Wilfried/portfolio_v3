import { useTheme } from "../../utils/Context/ThemeContext";

function ContactMe(){

    const { theme } = useTheme();

    return (
        <div className={`${theme == "dark" ? "" : ""} p-16`}>ContactMe</div>
    )
}

export default ContactMe;