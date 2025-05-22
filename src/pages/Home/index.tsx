import me from "/images/me.jpg";
import { useTheme } from "../../utils/Context/ThemeContext";
import FallingIconsBackground from "../../components/common/FaillingIconsBackground";
import ReactjsIcon from "../../components/common/icons/ReactjsIcon";
import TailwindCssIcon from "../../components/common/icons/TailwindCssIcon";
import NodeJsIcon from "../../components/common/icons/NodeJsIcon";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

function Home() {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const isDark = theme === "dark";

    return (
        <div className="flex items-center justify-center flex-col-reverse md:flex-row-reverse gap-32 relative w-full h-full">
            <FallingIconsBackground />

            <div className="fixed bottom-24 right-10 z-50">
                <button
                    onClick={() => setIsOpen(prev => !prev)}
                    className={`w-12 h-12 md:w-16 md:h-16 cursor-pointer border-2 border-secondary-dark rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                        isDark
                            ? "bg-primary-dark hover:bg-usual-purple"
                            : "bg-white hover:bg-usual-purple"
                    }`}
                >
                    <Icon icon="mdi:stack-overflow" width={32} height={32} className={`${isDark ? "text-white" : "text-black"}`} />
                </button>

                <div
                    className={`absolute bottom-20 -right-6 w-32 p-4 rounded-2xl shadow-xl transform transition-all duration-500 ${
                        isOpen
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
                    } ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
                >
                    <h3 className="text-center text-lg font-semibold mb-4">Main Stack</h3>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col items-center gap-2">
                            <p className="font-bold text-sm">Front</p>
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <ReactjsIcon className="w-6 h-6" />
                            </div>
                            <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                                <TailwindCssIcon className="w-6 h-6" />
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <p className="font-bold text-sm">Back</p>
                            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                                <NodeJsIcon className="w-6 h-6" />
                            </div>
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                <Icon icon="devicon:express" width={24} height={24} />
                            </div>
                            <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                                <Icon icon="devicon:postgresql" width={24} height={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 md:gap-6 text-center md:text-left">
                <p className="text-secondary-dark text-lg md:text-2xl">Hello. I am</p>
                <h1 className="text-3xl md:text-5xl">Wilfried FOKO KENMOGNE</h1>
                <p className="text-usual-purple text-2xl md:text-3xl">{">"} FullStack Developper</p>
            </div>

            <div className="relative -ml-8 md:ml-8">
                <div className="absolute w-72 h-72 md:w-96 md:h-96 border-2 shadow-2xl shadow-usual-purple border-secondary-dark -right-8 -top-8 rounded-4xl"></div>
                <div className="w-72 h-72 md:w-96 md:h-96 relative overflow-hidden bg-secondary-dark rounded-4xl">
                    <img className="w-full h-full" src={me} alt="me" />
                </div>
            </div>
        </div>
    );
}

export default Home;
