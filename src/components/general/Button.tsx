import React from "react";
import { cn } from "~/lib/cn";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <>
        <button
          ref={forwardedRef}
          className={cn(
            "rounded-lg border font-semibold shadow-sm transition-all focus:outline-none disabled:cursor-not-allowed",
            className,
          )}
          {...props}
        >
          <div className={cn("mx-auto")}>{children}</div>
        </button>
      </>
    );
  },
);
