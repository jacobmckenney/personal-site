import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, VariantProps } from "class-variance-authority";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import * as React from "react";

import { cn } from "~/lib/cn";

const transition = { type: "spring", stiffness: 800, damping: 80 };

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;

const portalVariants = cva("fixed inset-0 z-40 flex", {
  variants: {
    position: {
      left: "justify-start",
      right: "justify-end",
    },
  },
  defaultVariants: { position: "right" },
});

interface SheetPortalProps
  extends SheetPrimitive.DialogPortalProps,
    VariantProps<typeof portalVariants> {}

const SheetPortal = ({ position, children, ...props }: SheetPortalProps) => (
  <SheetPrimitive.Portal {...props}>
    <div className={portalVariants({ position })}>{children}</div>
  </SheetPrimitive.Portal>
);
SheetPortal.displayName = SheetPrimitive.Portal.displayName;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, children, ...props }, ref) => (
  <SheetPrimitive.Overlay {...props} asChild ref={ref}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      className={cn(
        "fixed inset-0 z-40 bg-black/30 backdrop-blur-sm",
        className,
      )}
    />
  </SheetPrimitive.Overlay>
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

export interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> {
  position: "right" | "left";
  isOpen: boolean; // required for framer-motion.
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  DialogContentProps
>(({ position, isOpen, className, children, ...props }, ref) => (
  <AnimatePresence>
    {isOpen && (
      <SheetPortal position={position} forceMount>
        <SheetOverlay forceMount />
        <SheetPrimitive.Content forceMount asChild ref={ref} {...props}>
          <motion.div
            className={cn(
              "fixed z-40 h-screen scale-100 gap-4 overflow-y-auto bg-white opacity-100",
              className,
            )}
            initial={{ x: position === "left" ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: position === "left" ? "-100%" : "100%" }}
            transition={transition}
          >
            {children}
            <SheetPrimitive.Close
              className={cn(
                "absolute top-2 rounded-full p-3 opacity-80 transition-all hover:bg-black/5 hover:opacity-100 focus:outline-none focus:ring-1 focus:ring-black/10",
                position === "left" ? "left-2" : "right-2",
              )}
            >
              <X className="h-7 w-7" />
            </SheetPrimitive.Close>
          </motion.div>
        </SheetPrimitive.Content>
      </SheetPortal>
    )}
  </AnimatePresence>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

export { Sheet, SheetContent, SheetTrigger };
