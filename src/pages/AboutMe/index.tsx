import CloseIcon from "../../components/common/icons/CloseIcon";
import { useInformation } from "../../utils/Context/InofrmationContext";
import { useTheme } from "../../utils/Context/ThemeContext";

function AboutMe(){

    const { theme } = useTheme();
    const { information, removeInformation, setActiveInformation } = useInformation();
    function closeTab(informationId: number) {
        console.log("...")
        removeInformation(informationId);
    }

    return (
        <div className={`${theme == "dark" ? "" : ""} w-full`}>
            <div className="h-12 border-b flex border-secondary-dark w-full">
                {
                    information.map((tab) => (
                        <div key={tab.id} className={`${tab.isActive ? "text-primary-light" : "text-secondary-dark"} flex items-center h-full pr-4 min-w-32 border-r border-secondary-dark`}>
                            <div onClick={() => setActiveInformation(tab.id)} className="flex  cursor-default justify-center items-center px-4  h-full w-full">
                                <p className="">{tab.name}</p>
                            </div>
                            <div className="cursor-pointer hover:bg-primary-light rounded-full flex items-center justify-center w-4 h-4 hover:text-black transition-all duration-150 ease-in-out" onClick={() => closeTab(tab.id)}>
                                <CloseIcon className="w-4 h-4" />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="p-8">
                <p className="whitespace-pre">
                    {
                        information.filter((info) => info.isActive)[0]?.content.split('\n').map((line, index) => (
                            index == 0 ? <div></div> :
                            <p key={index} className="whitespace-pre-wrap">
                                {index} {line}
                            </p>
                        ))
                    }
                </p>
            </div>
        </div>
    )
}

export default AboutMe;