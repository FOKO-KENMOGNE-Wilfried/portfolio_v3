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
            <div className="h-12 border-b md:flex border-secondary-dark w-full hidden">
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
            <div className="py-8 md:p-8 flex justify-between h-full gap-16 md:gap-0 flex-col md:flex-row">
                <div className="w-full h-full md:overflow-y-scroll font-mono border-b border-secondary-dark md:border-none pb-8 md:pb-0">
                    {
                        information.length !== 0 ? (
                        <>
                            {/* Ligne d’ouverture */}
                            <div className="grid grid-cols-[1rem_1fr] md:grid-cols-[3rem_1fr] gap-2 md:gap-8 px-2 py-1">
                                <div className="text-right text-gray-400">0</div>
                                <pre className="whitespace-pre-wrap break-words text-gray-400">/**</pre>
                            </div>

                            {
                            information.filter((info) => info.isActive)[0]?.content.split('\n').map((line, index) => (
                                <div key={index + 1} className="grid grid-cols-[1rem_1fr] md:grid-cols-[3rem_1fr] gap-2 md:gap-8 px-2 py-1">
                                <div className="text-right text-gray-400">{index + 1}</div>
                                <div className="flex gap-4">
                                    <p className="text-gray-400">*</p>
                                    <pre className="whitespace-pre-wrap break-words">{line.trim()}</pre>
                                </div>
                                </div>
                            ))
                            }

                            {/* Ligne de fermeture */}
                            <div className="grid grid-cols-[1rem_1fr] md:grid-cols-[3rem_1fr] gap-2 md:gap-8 px-2 py-1">
                            <div className="text-right text-gray-400">
                                {information.filter((info) => info.isActive)[0]?.content.split('\n').length + 1}
                            </div>
                            <pre className="whitespace-pre-wrap break-words text-gray-400">*/</pre>
                            </div>
                        </>
                        ) : (
                        <div className="flex items-center justify-center h-96 w-full md:h-full text-secondary-dark flex-col">
                            <FileIcon className="w-32 h-32" />
                            <p className="text-2xl">_Open file to see content</p>
                        </div>
                        )
                    }
                </div>

                <div className="w-full h-full p-4 md:overflow-y-scroll">
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