import { Outlet } from "react-router-dom";
import { useTheme } from "../../utils/Context/ThemeContext";
import Header from "../Header";
import Footer from "../Footer";
import AboutNavBar from "../AboutNavBar";

function AboutMeLayout(){

    const { theme } = useTheme();

    return (
        <div >
            <div className="flex w-full">
                <div className={`h-screen w-full flex flex-col justify-between overflow-hidden ${theme == "dark" ? "bg-primary-dark text-primary-light" : "bg-primary-light text-primary-dark"}`}>
                    <Header />
                    <div className="flex h-screen  w-full">
                        <AboutNavBar />
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default AboutMeLayout;