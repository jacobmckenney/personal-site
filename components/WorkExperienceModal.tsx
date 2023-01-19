import React, { useState } from "react";
import { motion, useCycle, AnimatePresence, Variants } from "framer-motion";
import styles from "../styles/Home.module.css";

interface Props {}

const cards = [
    { id: 1, title: "card1", content: "content oh yeah!" },
    { id: 2, title: "card2", content: "more content baby" },
    { id: 3, title: "card3", content: "this is content huzzah" },
    { id: 4, title: "card4", content: "ello mate" },
];

type Experience = {
    company: string;
    logoPath: string;
    responsibilities: string[];
};

const parentVariants: Variants = {
    open: {
        transition: { staggerChildren: 0.05, delayChildren: 0.05 },
    },
};

const childVariants: Variants = {
    open: {
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.0 } },
};

const experiences: Experience[] = [
    {
        company: "Grovia",
        logoPath: "/grovia.ico",
        responsibilities: [
            "Full-Stack development working directly under company leadership",
            "Employed modern technologies such as React, Django, Python, etc. to create the best possible user experience for customers",
            "Maintained software development cycle expertise using project management tools like GitHub + Linear",
        ],
    },
    {
        company: "Amazon",
        logoPath: "/amazon.svg",
        responsibilities: [
            "Built from scratch a proof-of-concept user interface to help in the process of service onboarding",
            "Implemented complex parsing and validation logic via NextJS endpoints",
            "Collaborated with senior engineers & managers to design a bespoke application for the customer",
            "Consistently delivered before deadlines which resulted in the expansion of the application above and beyond the original deliverables",
            "Trained in AWS technologies (Lambda, APIGateway, Fargate, ECS, & more)",
        ],
    },
    {
        company: "Zillow",
        logoPath: "/zillow.svg",
        responsibilities: [
            "Assessed and updated current codebase to use modern JS paradigms",
            "Built frontend features utilizing redux state management and internal packages/component libraries",
            "Worked closely with mentors to ensure usage of best practices",
            "Developed full-stack internal tool for a company-wide hackweek to improve efficiency & productivity of scrum processes",
        ],
    },
];

const WorkExperienceModal: React.FC<Props> = () => {
    const [selectedExperience, setSelectedExperience] = useState<number | undefined>(undefined);
    return (
        <>
            {selectedExperience !== undefined && <motion.div className={styles.backdrop} />}
            <motion.div className={styles.cardGrid}>
                {experiences.map((experience, index) => {
                    const isSelected = selectedExperience == index;
                    return (
                        <motion.div
                            onClick={() =>
                                setSelectedExperience((prev) => {
                                    if (index === prev) {
                                        return undefined;
                                    }
                                    return index;
                                })
                            }
                            layout="position"
                            className={(isSelected ? styles.selected : styles.unselected) + " " + styles.gridCard}
                            animate={{ backgroundColor: isSelected ? "#22252a" : "darkgrey" }}
                        >
                            <motion.img
                                className={isSelected ? styles.imgSelected : ""}
                                src={experience.logoPath}
                                style={{ width: "40px" }}
                            />
                            <h2>{experience.company}</h2>
                            <AnimatePresence>
                                {isSelected && (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: "auto" }}
                                        transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
                                    >
                                        <motion.ul
                                            initial="closed"
                                            animate="open"
                                            exit="closed"
                                            variants={parentVariants}
                                        >
                                            {experience.responsibilities.map((description, index) => (
                                                <motion.li key={index} variants={childVariants}>
                                                    {description}
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </motion.div>
        </>
    );
};

export default WorkExperienceModal;
