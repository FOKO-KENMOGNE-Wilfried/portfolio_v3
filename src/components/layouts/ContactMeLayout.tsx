import { Outlet } from "react-router-dom";
import { useTheme } from "../../utils/Context/ThemeContext";
import Header from "../Header";
import Footer from "../Footer";

function ContactMeLayout(){

    const { theme } = useTheme();

    return (
        <div className={`h-screen flex flex-col justify-between overflow-hidden ${theme == "dark" ? "bg-primary-dark text-primary-light" : "bg-primary-light text-primary-dark"}`}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default ContactMeLayout;