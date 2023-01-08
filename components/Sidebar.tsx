import { motion, AnimatePresence, useCycle } from "framer-motion";
import { NAV_PAGES } from "../constants";
import styles from "../styles/Home.module.css";
import { ChevronLeftIcon, ChevronRightIcon, LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const sidebarVariants = {
    open: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1,
        },
    },
};

const itemVariants = {
    open: { opacity: 1, transition: { delay: 0.5 } },
    closed: { opacity: 0 },
    exit: { opacity: 0 },
};

const Sidebar: React.FC = () => {
    const [open, cycle] = useCycle(false, true);
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
                            whileHover={{ scale: 1.2 }}
                            animate={{ opacity: 1, x: open ? -135 : 0, y: open ? -25 : 0 }}
                            transition={{ duration: 0.75 }}
                        >
                            <LinkedInLogoIcon />
                        </motion.a>
                        <motion.a
                            href="https://www.github.com/jacobmckenney"
                            whileHover={{ scale: 1.2 }}
                            animate={{ opacity: 1, x: open ? -160 : 0, y: open ? -53 : 0 }}
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
                            <motion.div
                                className={styles.sidebarContainer}
                                initial="closed"
                                animate="open"
                                variants={sidebarVariants}
                            >
                                {Object.entries(NAV_PAGES).map(([pageName, pageInfo]) => (
                                    <motion.a
                                        href={pageInfo.url}
                                        initial="closed"
                                        animate="open"
                                        exit="exit"
                                        variants={itemVariants}
                                    >
                                        {pageName}
                                    </motion.a>
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
