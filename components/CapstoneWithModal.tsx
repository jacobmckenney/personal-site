import React, { FC, useState } from "react";
import { motion, Variants } from "framer-motion";
import { useWindowSize } from "../hooks";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const PDFViewer = dynamic(import("../components/PDFViewer"), { ssr: false });

const modalVariants: Variants = {
    open: {},
    closed: {
        x: 0,
        y: 0,
    },
};

const CapstoneWithModal: FC = () => {
    const [showModal, setShowModal] = useState(false);
    const { width } = useWindowSize();
    return (
        <motion.div className={showModal ? styles.backdropOpen : ""}>
            <motion.div
                initial="closed"
                animate={showModal ? "open" : "closed"}
                variants={modalVariants}
                custom={width}
                className={showModal ? styles.modalOpen : ""}
            >
                <PDFViewer file="/capstone_paper.pdf" numPages={11} />
            </motion.div>
            <button style={{ zIndex: 100 }} onClick={() => setShowModal((showModal) => !showModal)}>
                open/close
            </button>
        </motion.div>
    );
};

export default CapstoneWithModal;
