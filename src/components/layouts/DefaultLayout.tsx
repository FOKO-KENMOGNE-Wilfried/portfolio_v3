import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { useTheme } from "../../utils/Context/ThemeContext";

function DefaultLayout(){

    const { theme } = useTheme();

    return (
        <div className={`h-screen flex flex-col justify-between  ${theme == "dark" ? "bg-primary-dark text-primary-light" : "bg-primary-light text-primary-dark"}`}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default DefaultLayout;