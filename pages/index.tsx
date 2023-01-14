import Head from "next/head";
import { NextPage } from "next";
import Sidebar from "../components/Sidebar";
import ProgressBar from "../components/ProgressBar";
import styles from "../styles/Home.module.css";
import { useRef, RefObject } from "react";
import { motion, useCycle } from "framer-motion";
import Section from "../components/Section";
import dynamic from "next/dynamic";
import PDFViewer from "../components/PDFViewer";

const CapstonePaper = dynamic(import("../components/PDFViewer"), { ssr: false });

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
                            <p> B.S. Computer Engineering - Grade: 3.88</p>
                        </Section>
                        <div style={{ height: 500 }} />
                        <iframe src="/clos" style={{ width: "100%", height: "800px", border: "0" }} />
                        <Section className={styles.projects}>
                            <h2 ref={projectRef}>Projects</h2>
                            <div></div>
                            <div>Paxos</div>
                            <div>Capstone Paper</div>
                            <PDFViewer file={"/capstone_paper.pdf"} numPages={11} />
                            <div>File Search Engine</div>
                            <div>Campus Maps</div>
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
                            <ul>
                                <li>Full-Stack development working directly under company leadership</li>
                                <li>
                                    Employed modern technologies such as React, Django, Python, etc. to create the best
                                    possible user experience for customers
                                </li>
                                <li>
                                    Maintained software development cycle expertise using project management tools like
                                    GitHub + Linear
                                </li>
                            </ul>
                        </Section>
                        <div style={{ height: 200 }}></div>
                        <Section className={styles.experience}>
                            <div style={{ display: "flex", columnGap: "10px" }}>
                                <img src="/amazon.svg" style={{ width: 20 }} />
                                <h3>Amazon</h3>
                            </div>
                            <ul>
                                <li>
                                    Built from scratch a proof-of-concept user interface to help in the process of
                                    service onboarding
                                </li>
                                <li>Implemented complex parsing and validation logic via NextJS endpoints</li>
                                <li>
                                    Collaborated with senior engineers & managers to design a bespoke application for
                                    the customer
                                </li>
                                <li>
                                    Consistently delivered before deadlines which resulted in the expansion of the
                                    application above and beyond the original deliverables
                                </li>
                                <li>Trained in AWS technologies (Lambda, APIGateway, Fargate, ECS, & more)</li>
                            </ul>
                        </Section>
                        <div style={{ height: 200 }}></div>
                        <Section className={styles.experience}>
                            <div style={{ display: "flex", columnGap: "10px" }}>
                                <img src="/zillow.svg" style={{ width: 20 }} />
                                <h3>Zillow</h3>
                            </div>
                            <ul>
                                <li>Assessed and updated current codebase to use modern JS paradigms</li>
                                <li>
                                    Built frontend features utilizing redux state management and internal
                                    packages/component libraries
                                </li>
                                <li>Worked closely with mentors to ensure usage of best practices</li>
                                <li>
                                    Developed full-stack internal tool for a company-wide hackweek to improve efficiency
                                    & productivity of scrum processes
                                </li>
                            </ul>
                        </Section>
                        <div style={{ height: 500 }} />
                    </div>
                </motion.div>
            </main>
        </>
    );
};

export default Home;
