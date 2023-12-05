import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "~/lib/cn";

const tooltip = cva(
  [
    "relative",
    "z-40",
    "rounded-md",
    "border",
    "px-1",
    "py-0.5",
    "text-sm",
    "font-semibold",
    "tracking-normal",
    "shadow-xl",
  ],
  {
    variants: {
      variant: {
        dark: ["border-gray-11", "bg-gray-10", "text-gray-1"],
        light: ["border-gray-3", "bg-white", "text-secondary"],
      },
    },
  },
);

export interface TooltipProps extends VariantProps<typeof tooltip> {
  children?: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  delayDuration?: number;
  alignOffset?: number;
  sideOffset?: number;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      className,
      content,
      side = "top",
      align = "center",
      variant = "light",
      delayDuration = 50,
      alignOffset = 0,
      sideOffset = 0,
    },
    ref,
  ) => {
    return (
      <>
        <TooltipPrimitive.Root delayDuration={delayDuration}>
          <TooltipPrimitive.Trigger asChild>
            {children}
          </TooltipPrimitive.Trigger>
          <TooltipPrimitive.Content
            className={cn(tooltip({ variant, class: className }))}
            side={side}
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}
          >
            {content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Root>
      </>
    );
  },
);
