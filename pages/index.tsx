import Head from "next/head";
import { NextPage } from "next";
import Sidebar from "../components/Sidebar";
import ProgressBar from "../components/ProgressBar";
import styles from "../styles/Home.module.css";
import { useRef, RefObject } from "react";
import { motion, useCycle } from "framer-motion";
import Section from "../components/Section";

const allSectionsVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 0.75, staggerChildren: 0.5, when: "beforeChildren" },
    },
};

const sectionVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

const Home: NextPage = () => {
    const [open, cycle] = useCycle(false, true);

    const introRef: RefObject<HTMLHeadingElement> = useRef<HTMLHeadingElement>(null);
    const educationRef: RefObject<HTMLHeadingElement> = useRef<HTMLHeadingElement>(null);
    const projectRef: RefObject<HTMLHeadingElement> = useRef<HTMLHeadingElement>(null);
    const experienceRef: RefObject<HTMLHeadingElement> = useRef<HTMLHeadingElement>(null);
    const sectionRefs = {
        "Jacob McKenney": introRef,
        Education: educationRef,
        Projects: projectRef,
        Experience: experienceRef,
    };

    return (
        <>
            <Head>
                <title>Jacob McKenney</title>
                <meta name="description" content="Jacob McKenney's personal website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main style={{ overflow: "hidden" }}>
                <Sidebar open={open} cycle={cycle} sectionRefs={sectionRefs} />
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
                        <Section className={styles.introduction}>
                            <div className={styles.introText}>
                                <div>
                                    <h2 ref={introRef}>Jacob McKenney</h2>
                                    <p>Software Engineer</p>
                                </div>
                                <div style={{ maxWidth: 200 }}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda porro rem
                                    tenetur libero magni eveniet ipsum dolore blanditiis quam! Consectetur, vero totam
                                    natus minus est impedit ab? Dolorum, impedit culpa!
                                </div>
                            </div>
                            <img src="/jacob.jpeg" className={styles.profilePhoto} />
                        </Section>
                        <div style={{ height: 500 }} />
                        <Section className={styles.education}>
                            <h2 ref={educationRef}>Education</h2>
                            <p>University of Washington</p>
                            <p> B.S. Computer Engineering</p>
                        </Section>
                        <div style={{ height: 500 }} />
                        <Section className={styles.projects}>
                            <h2 ref={projectRef}>Projects</h2>
                            <p>University of Washington</p>
                            <p> B.S. Computer Engineering</p>
                        </Section>
                        <div style={{ height: 500 }} />
                        <Section className={styles.experience}>
                            <h2 ref={experienceRef}>Experience</h2>
                        </Section>
                        <div style={{ height: 200 }}></div>
                        <Section className={styles.experience}>
                            <div style={{ display: "flex", columnGap: "10px" }}>
                                <img src="/grovia.ico" style={{ width: 20 }} />
                                <h3>Grovia</h3>
                            </div>
                        </Section>
                        <div style={{ height: 200 }}></div>
                        <Section className={styles.experience}>
                            <div style={{ display: "flex", columnGap: "10px" }}>
                                <img src="/amazon.svg" style={{ width: 20 }} />
                                <h3>Amazon</h3>
                            </div>
                        </Section>
                        <div style={{ height: 200 }}></div>
                        <Section className={styles.experience}>
                            <div style={{ display: "flex", columnGap: "10px" }}>
                                <img src="/zillow.svg" style={{ width: 20 }} />
                                <h3>Zillow</h3>
                            </div>
                        </Section>
                        <div style={{ height: 500 }} />
                    </div>
                </motion.div>
            </main>
        </>
    );
};

export default Home;
