import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "~/lib/cn";
import { Sheet, SheetContent, SheetTrigger } from "./general/Sheet";

const experienceCard = cva(
  [
    "text-white w-[400px] max-sm:w-[300px] border-secondary rounded-xl border-2 p-3 shadow-md",
  ],
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
          className={experienceCard({
            variant: experience.variant,
            class: "w-full max-w-4xl max-sm:w-full",
          })}
          position="right"
          isOpen={isOpen}
        >
          <div className="mb-10">
            <p className="text-xl font-semibold">{experience.title}</p>
          </div>
          <div className="flex w-full max-w-2xl flex-col items-center px-2">
            {children}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
