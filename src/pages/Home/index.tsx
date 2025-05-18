import me from "/images/me.jpg"
import { useTheme } from "../../utils/Context/ThemeContext";
import FallingIconsBackground from "../../components/common/FaillingIconsBackground";

function Home(){

    const { theme } = useTheme();

    return (
        <div className={`${theme == "dark" ? "" : ""} flex items-center justify-center gap-32 relative w-full h-full`}>
            <FallingIconsBackground />
            <div className="flex flex-col gap-4">
                <p className="text-secondary-dark text-2xl">Hello. I am</p>
                <h1 className="text-5xl">Wilfried FOKO KENMOGNE</h1>
                <p className="text-usual-purple text-3xl">{">"} FullStack Developper</p>
            </div>
            <div className="relative">
                {/* <div className="absolute w-96 h-96 border-2 shadow-2xl shadow-usual-orange border-secondary-dark -right-8 -top-8 rounded-full"></div> */}
                <div className="w-96 shadow-2xl shadow-usual-orange h-96 relative overflow-hidden rounded-full bg-secondary-dark">
                    <img className="w-full h-full" src={me} alt="me" />
                </div>
            </div>
        </div>
    )
}

export default Home;