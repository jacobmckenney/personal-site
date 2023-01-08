import Head from "next/head";
import { NextPage } from "next";
import Sidebar from "../components/Sidebar";
import ProgressBar from "../components/ProgressBar";
import styles from "../styles/Home.module.css";
import { useRef, RefObject } from "react";
import { motion, useCycle } from "framer-motion";

const Home: NextPage = () => {
    const [open, cycle] = useCycle(false, true);
    const introRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    return (
        <>
            <Head>
                <title>Jacob McKenney</title>
                <meta name="description" content="Jacob McKenney's personal website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main style={{ overflow: "hidden" }}>
                <Sidebar open={open} cycle={cycle} />
                <ProgressBar />

                <motion.div
                    initial={{ x: 35 }}
                    animate={{
                        x: open ? 200 : 35,
                        transition: { duration: 0.75 },
                        width: `calc(100vw - ${open ? 200 : 35}px)`,
                    }}
                >
                    <div className={styles.main}>
                        <motion.div
                            className={styles.introduction}
                            initial={{ x: 1000 }}
                            animate={{ x: 0, transition: { duration: 1 } }}
                            ref={introRef}
                        >
                            <div className={styles.introText}>
                                <div>
                                    <h2>Jacob McKenney</h2>
                                    <p>Software Engineer</p>
                                </div>
                                <div style={{ maxWidth: 200 }}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda porro rem
                                    tenetur libero magni eveniet ipsum dolore blanditiis quam! Consectetur, vero totam
                                    natus minus est impedit ab? Dolorum, impedit culpa!
                                </div>
                            </div>
                            <motion.img src="/jacob.jpeg" className={styles.profilePhoto} />
                        </motion.div>
                        <div className={styles.education}>
                            <h2>Education</h2>
                            <p>University of Washington</p>
                            <p> B.S. Computer Engineering</p>
                        </div>
                        <div className={styles.experience}>
                            <h2>Experience</h2>
                            <p>University of Washington</p>
                            <p> B.S. Computer Engineering</p>
                        </div>
                        <div className={styles.projects}>
                            <h2>Projects</h2>
                            <p>University of Washington</p>
                            <p> B.S. Computer Engineering</p>
                        </div>
                    </div>
                </motion.div>
            </main>
        </>
    );
};

export default Home;
