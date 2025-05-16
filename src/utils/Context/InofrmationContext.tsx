import { createContext, useContext, useState, type ReactNode } from "react";

interface InformationContextType {
    information: {
        id: number,
        name: string,
        isActive: boolean,
        content: string
    }[];
    updateInformation: (infromation: {
        id: number,
        name: string,
        content: string,
        isActive: boolean,
    }) => void;
    removeInformation: (informationId: number) => void;
    setActiveInformation: (informationId: number) => void;
}

const InformationContext = createContext<InformationContextType | undefined>(undefined);

function InformationProvider({ children } : { children: ReactNode }) {

    const [information, setInformation] = useState<{
        id: number,
        name: string,
        isActive: boolean,
        content: string
    }[]>([]);

    function updateInformation(newInformation: {
        id: number,
        name: string,
        isActive: boolean,
        content: string
    }) {
        let alwaysExist = false;
        information.forEach(element => {
            if(element.id == newInformation.id){
                alwaysExist = true;
            }
        });
        if(!alwaysExist) {
            setInformation([
                ...information.map((info) => {
                    info.isActive = false;
                    return info;
                }),
                newInformation
            ]);
        } else {
            setInformation(information.map((info) => {
                info.isActive = info.id == newInformation.id;
                return info;
            }))
        }
    }

    function setActiveInformation(informationId: number) {
        setInformation(information.map((info) => {
            info.isActive = info.id == informationId;
            return info;
        }))
    }

    function removeInformation(informationId: number) {
        setInformation(information.filter((info) => info.id !== informationId));
    }

    return (
        <InformationContext.Provider value={{ information, updateInformation, removeInformation, setActiveInformation }}>
            { children }
        </InformationContext.Provider>
    )
}

export const useInformation = () => {
    const context = useContext(InformationContext);
    if(!context) {
        throw new Error("useTheme must be used within an InformationProvider");
    }
    return context;
}

export default InformationProvider;