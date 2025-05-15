import { useTheme } from "../../utils/Context/ThemeContext";

function Home(){

    const { theme } = useTheme();

    return (
        <div className={`${theme == "dark" ? "" : ""}`}>Home</div>
    )
}

export default Home;