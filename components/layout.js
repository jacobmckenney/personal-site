import { useCycle } from "framer-motion";
import React from "react";
import Sidebar from "./Sidebar";
import {motion} from "framer-motion";

export const getSidebarWidth = (open) => {
    return open ? 200 : 35;
}

const sectionRefs = {
    "Jacob McKenney": "/",
    Education: "/education",
    Projects: "/projects",
    Experience: "/experience",
};

const Layout = ({ children }) => {
    const [openSidebar, cycleOpen] = useCycle(false, true);
    const sidebarWidth = getSidebarWidth(openSidebar);
    return (
        <div style={{display: "flex", minHeight: "100vh"}}>
            <Sidebar open={openSidebar} cycle={cycleOpen} sectionRefs={sectionRefs}/>
            <motion.div initial={false} animate={{width: sidebarWidth}} transition={{duration: 0.75}}/>
            <motion.div initial={false} animate={{width: `calc(100% - ${sidebarWidth}px)`}} transition={{duration: 0.75}}>{children}</motion.div>
        </div>
    )
}

export default Layout;