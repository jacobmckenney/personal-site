import { useRef, RefObject } from "react";
import { motion, useInView } from "framer-motion";

const Section: React.FC<{ children: JSX.Element | JSX.Element[]; className: any }> = ({ children, className }) => {
    const ref: RefObject<HTMLDivElement> = useRef(null);
    const inView: boolean = useInView(ref, { once: true });
    return (
        <motion.div
            className={className}
            ref={ref}
            animate={{ opacity: inView ? 1 : 0, transition: { duration: 0.5 } }}
        >
            {children}
        </motion.div>
    );
};

export default Section;
