import React, { FC, ReactNode, useState } from "react";
import { MotionConfig, motion, Variants, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Card from "./Card";
import useMeasure from "react-use-measure";

interface Props {
    children?: ReactNode;
    company: string;
    logoPath: string;
    responsibilities: string[];
}

const parentVariants: Variants = {
    open: {
        transition: { staggerChildren: 0.05, delayChildren: 0.05 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1, when: "afterChildren" },
    },
};

const childVariants: Variants = {
    open: {
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const WorkExperience: FC<Props> = ({ company, logoPath, responsibilities }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [ref, bounds] = useMeasure();
    return (
        <Card>
            <div style={{ width: "300px", padding: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", columnGap: "10px" }}>
                        <img src={logoPath} style={{ width: 20 }} />
                        <h3>{company}</h3>
                    </div>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                        style={{ cursor: "pointer" }}
                    >
                        <ChevronDownIcon />
                    </motion.div>
                </div>
                <motion.div animate={{ height: bounds.height }}>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                ref={ref}
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
                            >
                                <motion.ul initial="closed" animate="open" exit="closed" variants={parentVariants}>
                                    {responsibilities.map((description, index) => (
                                        <motion.li key={index} variants={childVariants}>
                                            {description}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </Card>
    );
};

export default WorkExperience;
