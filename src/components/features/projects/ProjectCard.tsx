import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  image: string;
}

export const ProjectCard: React.FC<Props> = ({ title, image }) => {
  return (
    <div className="overflw-hidden relative h-72 w-72 rounded-md bg-white">
      <motion.div className="-z-10 h-full w-full" whileHover={{ scale: 1.05 }}>
        <Image
          draggable={false}
          className="blur-sm"
          src={image}
          alt={title}
          layout="fill"
          objectFit="contain"
        />
      </motion.div>
    </div>
  );
};
