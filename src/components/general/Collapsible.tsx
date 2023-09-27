import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import {
  AnimatePresence,
  AnimationProps,
  motion,
  Target,
  TargetAndTransition,
} from "framer-motion";
import React from "react";
import { useDisclosure } from "~/lib/useDisclosure";

interface Props {
  trigger: React.ReactNode | ((open: boolean) => React.ReactNode);
  children?: React.ReactNode;
  disclosure?: ReturnType<typeof useDisclosure>;
  initial?: Omit<Target, "opacity" | "height">;
  animate?: Omit<TargetAndTransition, "opacity" | "height">;
  exit?: Omit<TargetAndTransition, "opacity" | "height">;
  transition?: AnimationProps["transition"];
  defaultOpen?: boolean;
  className?: string;
}

export const Collapsible: React.FC<Props> = ({
  trigger,
  children,
  disclosure,
  initial,
  animate,
  exit,
  transition,
  defaultOpen = false,
  className,
}) => {
  const { isOpen, toggle } = useDisclosure(defaultOpen);
  const open = disclosure?.isOpen ?? isOpen;
  const [initialVariants, setInitialVariants] = React.useState({
    opacity: defaultOpen ? 1 : 0,
    height: defaultOpen ? "auto" : 0,
  });
  React.useEffect(() => {
    setInitialVariants({ opacity: 0, height: 0 });
  }, []);
  return (
    <>
      <CollapsiblePrimitive.Root
        open={open}
        onOpenChange={disclosure?.toggle ?? toggle}
      >
        <CollapsiblePrimitive.Trigger className={className}>
          {typeof trigger === "function" ? trigger(open) : trigger}
        </CollapsiblePrimitive.Trigger>
        <AnimatePresence>
          {open && (
            <CollapsiblePrimitive.CollapsibleContent forceMount asChild>
              <motion.div
                initial={{ ...initial, ...initialVariants }}
                animate={{ ...animate, opacity: 1, height: "auto" }}
                exit={{ ...exit, opacity: 0, height: 0 }}
                transition={transition ?? { duration: 0.25 }}
                className="overflow-hidden"
              >
                {children}
              </motion.div>
            </CollapsiblePrimitive.CollapsibleContent>
          )}
        </AnimatePresence>
      </CollapsiblePrimitive.Root>
    </>
  );
};
