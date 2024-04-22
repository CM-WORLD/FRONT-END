import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "@components/navbar/index";
import Footer from "@components/footer/Footer";
import CommonLoading from "@components/loading";

function Layout () {
    return <>
        <NavBar />
        <Suspense fallback={<CommonLoading />}>
            <Outlet />
        </Suspense>
        <Footer/>
    </>
}

export default Layout;