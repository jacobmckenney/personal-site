import React from "react";
import { cn } from "~/lib/cn";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <>
      <div
        {...props}
        className={cn(
          "border-secondary rounded-xl border-2 p-3 shadow-md",
          className,
        )}
      >
        {children}
      </div>
    </>
  );
};
