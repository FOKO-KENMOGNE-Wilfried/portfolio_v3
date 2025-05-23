import { Outlet } from "react-router-dom";
import { useTheme } from "../../utils/Context/ThemeContext";
import Header from "../Header";
import Footer from "../Footer";
import ContactNavBar from "../ContactNavBar";

function ContactMeLayout(){

    const { theme } = useTheme();

    return (
        <div className="flex w-full">
                <div className={`h-screen w-full flex flex-col justify-between overflow-hidden ${theme == "dark" ? "bg-primary-dark text-primary-light" : "bg-primary-light text-primary-dark"}`}>
                    <Header />
                    <div className="flex flex-col md:flex-row w-full h-full overflow-hidden">
                        <ContactNavBar />
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
    )
}

export default ContactMeLayout;