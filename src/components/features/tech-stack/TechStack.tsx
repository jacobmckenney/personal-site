import { motion } from "framer-motion";
import React from "react";

interface Props {
  stack: Array<React.ReactElement>;
  initialDelay?: number;
}

export const TechStack: React.FC<Props> = ({ stack, initialDelay = 0.1 }) => {
  const stackSize = stack.length;
  return (
    <>
      <motion.div className="flex flex-row gap-2">
        {stack.map((tech, i) => (
          <motion.div
            initial={{
              x: `-${i * 30}%`,
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: initialDelay + i * 0.1,
              duration: stackSize * 0.15,
            }}
          >
            {tech}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};
