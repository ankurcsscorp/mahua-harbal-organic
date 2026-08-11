import { Navigate, Route, Routes } from "react-router-dom";
import ContactQuoteSection from "./Components/Contact/ContactQuoteSection";
import RootLayout from "./RootLayout";
import App from "./App";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout showHero><App/></RootLayout>}/>
            <Route path="/contact" element={<RootLayout showHero><ContactQuoteSection/></RootLayout>}/>
            {/* <Route path="*" element={<Navigate to="/"/>}/> */}
            {/* <Route path="*" element={<RootLayout showHero><App/></RootLayout>}/> */}
        </Routes>
    )
}
export default AppRoutes;