import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "~/lib/cn";
import { Collapsible } from "./general/Collapsible";

const experienceCard = cva(
  ["text-white w-[400px] border-secondary rounded-xl border-2 p-3 shadow-md"],
  {
    variants: {
      variant: {
        amazon: ["bg-white border-amazon text-amazon"],
        grovia: ["bg-white border-grovia text-grovia"],
        levanta: ["bg-levanta border-white"],
        uw: ["bg-uw border-white"],
        zillow: ["bg-zillow border-white"],
      },
    },
  },
);

export type Experience = {
  variant: VariantProps<typeof experienceCard>["variant"];
  title: string;
  dates: string;
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
  return (
    <>
      <div
        className={cn(
          experienceCard({ variant: experience.variant, class: className }),
        )}
      >
        <Collapsible
          className="w-full"
          trigger={(open) => (
            <div className="flex w-full flex-row items-center justify-between gap-3">
              <div className="w-max">{experience.icon}</div>
              <div>
                <p className="text-xl">{experience.title}</p>
                <p className="text-xs">{experience.dates}</p>
              </div>
            </div>
          )}
        >
          <div className="p-3">{children}</div>
        </Collapsible>
      </div>
    </>
  );
};
