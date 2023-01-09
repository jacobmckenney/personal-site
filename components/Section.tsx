import { useRef, RefObject, useEffect } from "react";
import { motion, useInView } from "framer-motion";

type SectionProps = {
    children: JSX.Element | JSX.Element[];
    className: any;
};

const Section: React.FC<SectionProps> = ({ children, className }) => {
    const ref: RefObject<HTMLDivElement> = useRef(null);
    const inView: boolean = useInView(ref, { once: true });
    return (
        <motion.div
            className={className}
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0, transition: { duration: 0.5 } }}
        >
            {children}
        </motion.div>
    );
};

export default Section;
