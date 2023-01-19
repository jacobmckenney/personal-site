import { useCycle, Variants, AnimatePresence } from "framer-motion";
import { ReactElement, useState } from "react";
import WorkExperienceModal from "../components/WorkExperienceModal";
import { NextPageWithLayout } from "./_app";
import Layout from "../components/layout";

const modalVariants: Variants = {
    open: {
        position: "fixed",
        left: "50%",
        transform: "translate(-50%, 0)",
        top: "50%",
    },
    closed: {
        position: "absolute",
        left: "0%",
    },
};

const Practice: NextPageWithLayout = () => {
    const [layout, toggleLayout] = useCycle(false, true);
    return (
        <div style={{ width: "100%" }}>
            <WorkExperienceModal />
            {/* <motion.div className={styles.practiceContainerRow}>
                <motion.div className={layout ? `${styles.practiceFixed}` : ""}>
                    <motion.div className={styles.practiceCard} layout>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem quis. Pariatur enim
                        aliquam vitae amet eius? Molestias, iure cum quasi voluptas dolores voluptatum pariatur veniam
                        aspernatur natus earum nulla? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
                        neque eveniet? Quis officia rerum necessitatibus nostrum aspernatur aliquam ut consequuntur,
                        amet, vero minus repellendus laudantium neque porro impedit laboriosam eveniet?
                    </motion.div>
                </motion.div>
                <motion.div layout transition={{ duration: 1 }}>
                    item 2
                </motion.div>
                <motion.div layout transition={{ duration: 1 }}>
                    item 3
                </motion.div>
                <motion.button layout transition={{ duration: 1 }} onClick={() => toggleLayout()}>
                    toggle
                </motion.button>
            </motion.div> */}
        </div>
    );
};

Practice.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};

export default Practice;
