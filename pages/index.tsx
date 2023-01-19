import Head from "next/head";
import { NextPageWithLayout } from "./_app";
import ProgressBar from "../components/ProgressBar";
import styles from "../styles/Home.module.css";
import { useRef, RefObject, useEffect, useState, ReactElement } from "react";
import { motion, transform, useCycle } from "framer-motion";
import Section from "../components/Section";
import dynamic from "next/dynamic";
import { useWindowSize } from "../hooks";
import Link from "next/link";
import Layout from "../components/layout";

const PDFViewer = dynamic(import("../components/PDFViewer"), { ssr: false });

const Home: NextPageWithLayout = () => {
    const [open, cycle] = useCycle(false, true);
    const [carouselOffset, setCarouselOffset] = useState(0);

    const introRef: RefObject<HTMLHeadingElement> = useRef<HTMLHeadingElement>(null);
    const educationRef: RefObject<HTMLHeadingElement> = useRef<HTMLHeadingElement>(null);
    const projectRef: RefObject<HTMLHeadingElement> = useRef<HTMLHeadingElement>(null);
    const experienceRef: RefObject<HTMLHeadingElement> = useRef<HTMLHeadingElement>(null);

    const sidebarWidth = open ? 200 : 25;

    const { width } = useWindowSize();
    const screenWidth: number = width ?? 1;

    useEffect(() => {
        const interval = setInterval(() => {
            setCarouselOffset((carouselOffset) => (carouselOffset + 1) % screenWidth);
        }, 10);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const carouselTranformer = transform([0, screenWidth], [-screenWidth / 2, screenWidth / 2], {
        clamp: false,
    });
    const carouselTransformed = carouselTranformer(carouselOffset);

    useEffect(() => console.log(carouselTransformed), [carouselTransformed]);

    return (
        <>
            <Head>
                <title>Jacob McKenney</title>
                <meta name="description" content="Jacob McKenney's personal website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main style={{ overflow: "hidden" }}>
                <ProgressBar />
                <motion.div
                    initial={{ x: 35 }}
                    animate={{
                        x: sidebarWidth,
                        transition: { duration: 0.75 },
                        width: `calc(100vw - ${sidebarWidth}px)`,
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
                            <p> B.S. Computer Engineering - Grade: 3.88</p>
                        </Section>
                        <div style={{ height: 500 }} />
                        <iframe src="/clos" style={{ width: "100%", height: "800px", border: "0" }} />
                        <Section className={styles.projects}>
                            <h2 ref={projectRef}>Projects</h2>
                            <div></div>
                            <div>Paxos</div>
                            <div>Capstone Paper</div>
                            <PDFViewer file="capstone_paper.pdf" numPages={11} />
                            <div>File Search Engine</div>
                            <div>Campus Maps</div>
                        </Section>
                        <div style={{ height: 500 }} />
                        <Section className={styles.experience}>
                            <Link href="/experience">
                                <h2 ref={experienceRef}>Experience</h2>
                            </Link>
                        </Section>
                        <div style={{ height: 200 }}></div>
                    </div>
                </motion.div>
            </main>
        </>
    );
};

Home.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};

export default Home;
