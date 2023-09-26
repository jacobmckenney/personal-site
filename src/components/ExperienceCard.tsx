import { VariantProps, cva } from "class-variance-authority";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "~/lib/cn";

const experienceCard = cva(
  [
    "text-white w-full max-w-xl border-secondary rounded-xl border-2 p-3 shadow-md",
  ],
  {
    variants: {
      variant: {
        amazon: ["bg-amazon"],
        grovia: ["bg-white border-grovia text-grovia"],
        levanta: ["bg-levanta"],
        uw: ["bg-uw border-white"],
        zillow: ["bg-zillow"],
      },
    },
  },
);

export type Experience = {
  variant: VariantProps<typeof experienceCard>["variant"];
  title: string;
  icon: React.ReactNode;
};

interface Props {
  experience: Experience;
  className?: string;
  children?: React.ReactNode;
}

export const ExperienceCard: React.FC<Props> = ({
  experience,
  className,
  children,
}) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <>
      <motion.div
        onClick={() => setExpanded(!expanded)}
        className={cn(
          experienceCard({ variant: experience.variant, class: className }),
        )}
      >
        <div className="flex flex-row items-center justify-between gap-3">
          <div className="w-max">{experience.icon}</div>
          <p className="text-xl">{experience.title}</p>
        </div>
        {expanded && children}
      </motion.div>
    </>
  );
};
