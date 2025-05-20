import ArrowDownIcon from "./common/icons/ArrowDownIcon";
import MailIcon from "./common/icons/MailIcon";
import PhoneIcon from "./common/icons/PhoneIcon";

function ContactNavBar(){
    return (
        <div className="w-full md:w-80 md:border-r border-secondary-dark">
            <div className="flex items-center w-full h-12 border-b border-secondary-dark pl-8 gap-4">
                <ArrowDownIcon className="w-6 h-6" />
                <p>contacts</p>
            </div>
            <div className="pl-4 pt-8 flex flex-col gap-6">
                <a href="mailto:fokowilfried7@gmail.com" className="flex items-center text-secondary-dark cursor-pointer hover:text-primary-light w-full gap-4">
                    <MailIcon className="w-6 h-6" />
                    <p>fokowilfried7@gmail.com</p>
                </a>
                <div className="flex items-center w-full text-secondary-dark hover:text-primary-light gap-4">
                    <PhoneIcon className="w-6 h-6" />
                    <p className="text-secondary-dark">
                        <a className="text-secondary-dark cursor-pointer hover:text-primary-light" href="tel:+237683415230">683415230</a> / <a className="text-secondary-dark cursor-pointer hover:text-primary-light" href="tel:+237620131496">620131496</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactNavBar;