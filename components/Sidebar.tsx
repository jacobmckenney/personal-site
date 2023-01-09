import { motion, AnimatePresence, Cycle } from "framer-motion";
import { RefObject } from "react";
import { Pages } from "../constants";
import styles from "../styles/Home.module.css";
import { ChevronLeftIcon, ChevronRightIcon, LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const itemVariants = {
    open: { opacity: 1, transition: { delay: 0.4 } },
    closed: { opacity: 0 },
    exit: { opacity: 0 },
};

interface SidebarProps {
    open: boolean;
    cycle: Cycle;
    sectionRefs: { [sectionName: string]: RefObject<HTMLDivElement> };
}

const Sidebar: React.FC<SidebarProps> = ({ open, cycle, sectionRefs }) => {
    return (
        <div style={{ position: "fixed" }}>
            <motion.div initial={{ x: 10 }} animate={{ x: open ? 170 : 10 }} transition={{ duration: 0.75 }}>
                <AnimatePresence>
                    <div className={styles.sidebarIcons}>
                        {open ? (
                            <ChevronLeftIcon onClick={() => cycle()} style={{ cursor: "pointer" }} />
                        ) : (
                            <ChevronRightIcon onClick={() => cycle()} style={{ cursor: "pointer" }} />
                        )}
                        <motion.a
                            href="https://www.linkedin.com/in/jacobmckenney/"
                            whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                            animate={{ opacity: 1, x: open ? -135 : 0, y: open ? -25 : 0 }}
                            transition={{ duration: 0.75 }}
                        >
                            <LinkedInLogoIcon />
                        </motion.a>
                        <motion.a
                            href="https://www.github.com/jacobmckenney"
                            whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                            animate={{ opacity: 1, x: open ? -160 : 0, y: open ? -54 : 0 }}
                            transition={{ duration: 0.75 }}
                        >
                            <GitHubLogoIcon />
                        </motion.a>
                    </div>
                </AnimatePresence>
            </motion.div>
            <motion.aside initial={{ width: 35 }} animate={{ width: open ? 200 : 35 }} transition={{ duration: 0.75 }}>
                <AnimatePresence>
                    <div className={styles.sidebar}>
                        {open && (
                            <motion.div className={styles.sidebarContainer}>
                                {Object.entries(sectionRefs).map(([sectionName, sectionRef], i) => (
                                    <motion.div
                                        className={styles.pageLink}
                                        onClick={() =>
                                            sectionRef.current?.scrollIntoView({
                                                block: "center",
                                                behavior: "smooth",
                                            })
                                        }
                                        initial="closed"
                                        animate="open"
                                        exit="exit"
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        {sectionName}
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </div>
                </AnimatePresence>
            </motion.aside>
        </div>
    );
};

export default Sidebar;
