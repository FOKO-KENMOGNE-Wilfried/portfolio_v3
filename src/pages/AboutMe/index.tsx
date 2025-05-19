import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import CloseIcon from "../../components/common/icons/CloseIcon";
import { useInformation } from "../../utils/Context/InofrmationContext";
import { useTheme } from "../../utils/Context/ThemeContext";
import CodeSnipets from "../../data/CodeSnipet";
import FileIcon from "../../components/common/icons/FileIcon";

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
            <div className="p-8 flex justify-between h-[85vh]">
                <div className="whitespace-pre w-full overflow-y-scroll h-full">
                    {
                        information.length !== 0 ?

                        information.filter((info) => info.isActive)[0]?.content.split('\n').map((line, index) => (
                            index == 0 ? <div key={index}></div> :
                            <div key={index} className="whitespace-pre-wrap">
                                <div className="w-8 inline-block">{index}</div> {line}
                            </div>
                        ))
                        : (
                        <div className="flex items-center justify-center w-full h-full text-secondary-dark flex-col">
                            <FileIcon className="w-32 h-32"/>
                            <p className="text-2xl">_Open file to see content</p>
                        </div>
                    )
                    }
                </div>
                <div className="w-full h-full p-4 overflow-y-scroll">
                    <div className="flex flex-col gap-8">
                        {
                            CodeSnipets.map((code) => (
                                <div key={code.id}  className="">
                                    <div className="flex flex-col gap-2">
                                        <p className="text-2xl text-usual-purple">__{ code.codeLabel }</p>
                                        <p className="text-secondary-dark">Language : <span className="text-usual-purple">{ code.language }</span></p>
                                        <p className="text-secondary-dark">Description : { code.details }</p>
                                    </div>
                                    <SyntaxHighlighter language={code.language} style={dracula}>
                                        { code.code }
                                    </SyntaxHighlighter>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;