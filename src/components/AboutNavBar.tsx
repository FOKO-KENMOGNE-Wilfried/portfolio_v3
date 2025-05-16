import { useState, type JSX } from "react";
import { useTheme } from "../utils/Context/ThemeContext";
import ArrowDownIcon from "./common/icons/ArrowDownIcon";
import ArrowRightIcon from "./common/icons/ArrowRightIcon";
import FolderIcon from "./common/icons/FolderIcon";
import FileIcon from "./common/icons/FileIcon";
import characterReduce from "../utils/functions/CharacterReduce";
import { useInformation } from "../utils/Context/InofrmationContext";
import AboutMeData from "../data/AboutData";

function AboutNavBar() {
  const { theme } = useTheme();
  const { updateInformation, information } = useInformation();

  type File = {
    id: number;
    name: string;
    isActive: boolean;
    icon?: JSX.Element;
    data: string;
  };

  type Info = {
    id: number;
    name: string;
    isActive: boolean;
    files: File[];
  };

  type Content = {
    id: number;
    name: string;
    info: Info[];
    isDirectlyDisplayContent?: boolean;
  };

  type MainObject = {
    id: number;
    name: string;
    icon: JSX.Element;
    isActive: boolean;
    contents: Content[];
  };

  function toggleMainObjectIsActive(
    data: MainObject[],
    mainId: number
  ): MainObject[] {
    setCurrentTabs(mainId.toString());
    return data.map((obj) => ({
      ...obj,
      isActive: obj.id === mainId ? !obj.isActive : false,
    }));
  }

  function toggleInfoIsActive(
    data: MainObject[],
    mainId: number,
    contentId: number,
    infoId: number
  ): MainObject[] {
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
    data: MainObject[],
    mainId: number,
    contentId: number,
    infoId: number,
    fileId: number
  ): MainObject[] {
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
  const [informationList, setInformationList] = useState<MainObject[]>(AboutMeData);

  const currentObject = informationList.find(
    (obj) => obj.id.toString() === currentTabs
  );

  return (
    <div
      className={`${
        theme == "dark"
          ? "bg-primary-dark text-primary-light"
          : "bg-primary-light text-primary-dark"
      } flex w-80`}
    >
      <div className={`flex w-full`}>
        <div className="border-r border-secondary-dark w-1/6 flex flex-col items-center pt-4 gap-8">
          {informationList.map((element) => (
            <div
              key={element.id}
              onClick={() =>
                setInformationList(
                  toggleMainObjectIsActive(informationList, element.id)
                )
              }
              className={`${
                element.isActive ? "text-primary-light" : "text-secondary-dark"
              } cursor-pointer`}
            >
              {element.icon}
            </div>
          ))}
        </div>
        <div className="border-r border-secondary-dark w-5/6">
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
