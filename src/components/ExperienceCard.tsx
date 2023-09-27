import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "~/lib/cn";
import { Sheet, SheetContent, SheetTrigger } from "./general/Sheet";

const experienceCard = cva(
  [
    "text-white w-[400px] max-sm:w-[300px] h-[75px] border-secondary rounded-xl border-2 p-3 shadow-md",
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

const experienceSheet = cva(
  ["w-full max-w-4xl max-sM: w-full rounded-xl border-2 p-3 relative"],
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
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Sheet open={isOpen} onOpenChange={() => setIsOpen((x) => !x)}>
        <SheetTrigger>
          <div
            className={cn(
              experienceCard({ variant: experience.variant, class: className }),
            )}
          >
            <div className="flex w-full flex-row items-center justify-between gap-3 text-end">
              <div className="w-max">{experience.icon}</div>
              <div>
                <p className="text-xl max-sm:text-lg">{experience.title}</p>
                <p className="text-xs">{experience.dates}</p>
              </div>
            </div>
          </div>
        </SheetTrigger>
        <SheetContent
          className={experienceSheet({
            variant: experience.variant,
          })}
          position="right"
          isOpen={isOpen}
        >
          <div className="mb-10 flex flex-row items-center gap-4">
            <div className="relative h-12 w-12  rounded-full bg-white">
              <div className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2">
                {experience.icon}
              </div>
            </div>
            <p className="text-3xl font-semibold">{experience.title}</p>
          </div>
          <div className="flex w-full max-w-lg flex-col px-2">{children}</div>
        </SheetContent>
      </Sheet>
    </>
  );
};
