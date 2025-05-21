import { useState } from "react";
import { useTheme } from "../utils/Context/ThemeContext";
import ArrowDownIcon from "./common/icons/ArrowDownIcon";
import ArrowRightIcon from "./common/icons/ArrowRightIcon";
import FolderIcon from "./common/icons/FolderIcon";
import FileIcon from "./common/icons/FileIcon";
import characterReduce from "../utils/functions/CharacterReduce";
import { useInformation } from "../utils/Context/InofrmationContext";
import AboutMeData from "../data/AboutData";
import type { AboutMainObject } from "../utils/Types/AboutTypes";

function AboutNavBar() {
  const { theme } = useTheme();
  const { updateInformation, information } = useInformation();

  function toggleMainObjectIsActive(
    data: AboutMainObject[],
    mainId: number
  ): AboutMainObject[] {
    setCurrentTabs(mainId.toString());
    return data.map((obj) => ({
      ...obj,
      isActive: obj.id === mainId ? !obj.isActive : false,
    }));
  }

  function toggleInfoIsActive(
    data: AboutMainObject[],
    mainId: number,
    contentId: number,
    infoId: number
  ): AboutMainObject[] {
    return data.map((obj) => {
      if (obj.id !== mainId) return { ...obj };
      return {
        ...obj,
        contents: obj.contents.map((content) => {
          if (content.id !== contentId) return content;
          return {
            ...content,
            info: content.info.map((info) => ({
              ...info,
              isActive: info.id === infoId ? !info.isActive : false,
            })),
          };
        }),
      };
    });
  }

  function toggleFileIsActive(
    data: AboutMainObject[],
    mainId: number,
    contentId: number,
    infoId: number,
    fileId: number
  ): AboutMainObject[] {
    return data.map((obj) => {
      if (obj.id !== mainId) return obj;
      return {
        ...obj,
        contents: obj.contents.map((content) => {
          if (content.id !== contentId) return content;
          return {
            ...content,
            info: content.info.map((info) => {
              if (info.id !== infoId) return info;
              return {
                ...info,
                files: info.files.map((file) => ({
                  ...file,
                  isActive: file.id === fileId ? !file.isActive : false,
                })),
              };
            }),
          };
        }),
      };
    });
  }

  const [currentTabs, setCurrentTabs] = useState<string>("2");
  const [informationList, setInformationList] = useState<AboutMainObject[]>(AboutMeData);

  const currentObject = informationList.find(
    (obj) => obj.id.toString() === currentTabs
  );

  return (
    <div
      className={`${
        theme == "dark"
          ? "bg-primary-dark text-primary-light"
          : "bg-primary-light text-primary-dark"
      } flex w-full md:w-80 sticky top-0`}
    >
      <div className={`flex w-full`}>
        <div className="md:border-r border-secondary-dark w-full md:w-1/6 flex flex-col items-center md:pt-4 md:gap-8">
          {informationList.map((element) => (
            <div className="w-full md:w-fit flex flex-col gap-2">

              <div
                key={element.id}
                onClick={() =>
                  setInformationList(
                    toggleMainObjectIsActive(informationList, element.id)
                  )
                }
                className={`relative bg-primary-light-dark md:bg-transparent w-full md:w-fit h-14 md:h-fit flex items-center justify-center md:block group ${
                  element.isActive ? "md:text-primary-light" : "md:text-secondary-dark"
                } cursor-pointer`}
              >
                <p className="hidden md:block">{element.icon}</p>
                <ArrowDownIcon className={`w-6 h-6 ${element.isActive ? "rotate-0" : "-rotate-90"} transition-all duration-150 ease-in-out`} />
                <p className="md:hidden">{ element.name }</p>
                <div
                  className={`
                    absolute bg-black px-4 py-1 rounded-md left-8 top-0
                    opacity-0 group-hover:opacity-100
                    pointer-events-none transition-all duration-150 ease-in-out
                  `}
                >
                  {element.name}
                </div>
              </div>
              
              <div className={`md:hidden w-full ${element.isActive ? "h-fit" : "h-0"} transition-all duration-150 ease-in-out overflow-hidden`}>
                <div className="flex flex-col items-center w-full">
                  {element?.contents?.filter((info) => info.name !== "Contacts").map((content) => (
                    <div
                      key={content.id}
                      className="w-full border-b border-secondary-dark"
                    >
                      
                        <div className="w-full pl-8 py-4">
                          {content?.info?.map((info) => (
                            <div key={info.id}>
                              <div className="flex gap-2">
                                <ArrowRightIcon
                                  className={`${
                                    info.isActive ? "rotate-90" : "rotate-0"
                                  } w-6 h-6 transition-all duration-150 ease-in-out`}
                                />
                                <div
                                  className={`${
                                    info.isActive
                                      ? "text-primary-light"
                                      : "text-secondary-dark"
                                  } flex flex-col`}
                                >
                                  <div
                                    onClick={() =>
                                      setInformationList(
                                        toggleInfoIsActive(
                                          informationList,
                                          currentObject!.id,
                                          content.id,
                                          info.id
                                        )
                                      )
                                    }
                                    className="flex items-center gap-2 cursor-pointer"
                                  >
                                    <FolderIcon className={`w-4 h-4`} />
                                    <p>{info.name}</p>
                                  </div>
                                  <div
                                    className={`${
                                      info.isActive ? "flex flex-col pl-6" : "hidden"
                                    }`}
                                  >
                                    {info.files?.map((file) => (
                                      <div
                                        key={file.id}
                                        onClick={() =>
                                          {
                                            setInformationList(
                                              toggleFileIsActive(
                                                informationList,
                                                currentObject!.id,
                                                content.id,
                                                info.id,
                                                file.id
                                              )
                                            );
                                            updateInformation(
                                              {
                                                id: file.id,
                                                name: file.name,
                                                content: file.data,
                                                isActive: true,
                                              }
                                            )
                                          }
                                        }
                                        className={`${
                                          information.filter(element => element.id == file.id)[0]?.isActive
                                            ? "text-primary-light"
                                            : "text-secondary-dark"
                                        } flex items-center gap-2 cursor-pointer`}
                                      >
                                        <FileIcon className="w-4 h-4" />
                                        <p>{characterReduce(file.name, 10)}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      
                    </div>
                  ))}
                </div>
              </div>

            </div>
        ))}
        </div>
        <div className="border-r hidden md:block border-secondary-dark w-5/6">
          <div className="flex flex-col items-center">
            {currentObject?.contents?.map((content) => (
              <div
                key={content.id}
                className="w-full border-b border-secondary-dark"
              >
                <div className="flex items-center w-full h-12 border-b border-secondary-dark pl-8 gap-4">
                  <ArrowDownIcon className="w-6 h-6" />
                  <p>{content.name}</p>
                </div>
                {content.isDirectlyDisplayContent ? (
                  <div>
                    {content.info.map((info) => (
                      <div key={info.id}>
                        <div className="flex gap-2 mt-2 pl-2 py-4">
                          <div className={`flex flex-col gap-4`}>
                            {info.files?.map((file) => (
                              <div
                                key={file.id}
                                onClick={() =>
                                  setInformationList(
                                    toggleFileIsActive(
                                      informationList,
                                      currentObject.id,
                                      content.id,
                                      info.id,
                                      file.id
                                    )
                                  )
                                }
                                className={`${
                                  file.isActive
                                    ? "text-primary-light"
                                    : "text-secondary-dark"
                                } flex items-center gap-2 cursor-pointer hover:text-primary-light`}
                              >
                                {file.icon}
                                <p>{file.data}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="w-full pl-8 py-2 mb-8">
                    {content?.info?.map((info) => (
                      <div key={info.id}>
                        <div className="flex gap-2">
                          <ArrowRightIcon
                            className={`${
                              info.isActive ? "rotate-90" : "rotate-0"
                            } w-6 h-6 transition-all duration-150 ease-in-out`}
                          />
                          <div
                            className={`${
                              info.isActive
                                ? "text-primary-light"
                                : "text-secondary-dark"
                            } flex flex-col`}
                          >
                            <div
                              onClick={() =>
                                setInformationList(
                                  toggleInfoIsActive(
                                    informationList,
                                    currentObject.id,
                                    content.id,
                                    info.id
                                  )
                                )
                              }
                              className="flex items-center gap-2 cursor-pointer"
                            >
                              <FolderIcon className={`w-4 h-4`} />
                              <p>{info.name}</p>
                            </div>
                            <div
                              className={`${
                                info.isActive ? "flex flex-col pl-6" : "hidden"
                              }`}
                            >
                              {info.files?.map((file) => (
                                <div
                                  key={file.id}
                                  onClick={() =>
                                    {
                                      setInformationList(
                                        toggleFileIsActive(
                                          informationList,
                                          currentObject.id,
                                          content.id,
                                          info.id,
                                          file.id
                                        )
                                      );
                                      updateInformation(
                                        {
                                          id: file.id,
                                          name: file.name,
                                          content: file.data,
                                          isActive: true,
                                        }
                                      )
                                    }
                                  }
                                  className={`${
                                    information.filter(element => element.id == file.id)[0]?.isActive
                                      ? "text-primary-light"
                                      : "text-secondary-dark"
                                  } flex items-center gap-2 cursor-pointer`}
                                >
                                  <FileIcon className="w-4 h-4" />
                                  <p>{characterReduce(file.name, 10)}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutNavBar;
