import { VariantProps, cva } from "class-variance-authority";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { cn } from "~/lib/cn";

const experienceCard = cva(
  [
    "text-white w-[400px] max-sm:w-[300px] h-[75px] border-secondary rounded-md border-[1px] p-3 shadow-md",
  ],
  {
    variants: {
      variant: {
        amazon: ["bg-white border-amazon text-amazon"],
        grovia: ["bg-white border-grovia text-grovia"],
        levanta: ["bg-white border-levanta text-levanta"],
        uw: ["bg-white border-uw text-uw"],
        zillow: ["bg-white border-zillow text-zillow"],
      },
    },
  },
);

export const experienceSheet = cva(
  ["w-full max-w-4xl max-sM: w-full rounded-xl border-[1px] p-3 relative"],
  {
    variants: {
      variant: {
        amazon: ["bg-amazon text-white bordr-white"],
        grovia: ["bg-grovia text-white border-white"],
        levanta: ["bg-levanta text-white border-white"],
        uw: ["bg-uw text-white border-white"],
        zillow: ["bg-zillow text-white border-white"],
      },
    },
  },
);

export type Experience = {
  variant: VariantProps<typeof experienceCard>["variant"];
  title: string;
  dates: string;
  role: string;
  icon: React.ReactNode;
  content: React.ReactNode;
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
  return (
    <motion.div className="flex" whileHover={{ scale: 1.03 }}>
      <Link
        href={`/?page=${experience.variant}`}
        as={`/${experience.variant}`}
        className={cn(
          experienceCard({ variant: experience.variant, class: className }),
        )}
      >
        <motion.div className="flex w-full flex-row items-center justify-between gap-3 text-end">
          <div className="w-max">{experience.icon}</div>
          <div>
            <p className="text-xl max-sm:text-lg">{experience.title}</p>
            <p className="text-xs">{experience.dates}</p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};
