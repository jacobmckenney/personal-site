import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import styles from "../styles/Home.module.css";

const ProgressBar: React.FC = () => {
    const { scrollYProgress } = useScroll();
    return <motion.div className={styles.progressBar} style={{ scaleX: useSpring(scrollYProgress) }} />;
};

export default ProgressBar;
