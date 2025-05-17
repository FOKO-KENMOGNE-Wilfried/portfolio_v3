import type { JSX } from "react";
import CheckIcon from "./icons/CheckIcon";

function SelectTechno({ label, icon, isChecked, handleClick } : { label: string, icon: JSX.Element, isChecked: boolean, handleClick: (label: string) => void }) {
    return (
        <div onClick={() => handleClick(label)} className="flex cursor-pointer items-center gap-8 pl-8">
            <div className={`${isChecked ? "bg-secondary-dark text-primary-light" : "text-transparent"} border w-6 h-6 flex justify-center items-center border-secondary-dark rounded-sm transition-all duration-150 ease-in-out`}>
                <CheckIcon className="w-4 h-4" />
            </div>
            {/*  */}
            <div className="flex gap-2 items-center">
                { icon }
                <p>{ label }</p>
            </div>
        </div>
    )
}

export default SelectTechno;