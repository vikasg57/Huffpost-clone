import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { PageNotFound } from "../PageNotFound/PageNotFound";

export const Routers = () => {
    return (<>
        {/* <Navbar /> */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
            
        </Routes>
    </>);
}