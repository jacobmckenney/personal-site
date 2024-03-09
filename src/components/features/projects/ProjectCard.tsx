import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { cn } from "~/lib/cn";

interface Props {
  title: string;
  bgImage: string;
  children?: React.ReactNode;
  href?: string;
  className?: string;
}

export const ProjectCard: React.FC<Props> = ({
  bgImage,
  title,
  href,
  className,
  children,
}) => {
  const Component = (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border bg-gray-3 p-8",
        href && "hover:border-gray-8 hover:bg-gray-4",
        className,
      )}
    >
      {bgImage && (
        <div className="pointer-events-none absolute inset-0 -m-7 blur-md brightness-50">
          <Image alt={title} src={bgImage} layout="fill" />
        </div>
      )}
      <div className="relative h-full">
        <p className="absolute right-1/2 top-1/4 translate-x-1/2 translate-y-1/2 text-3xl text-background">
          {title}
        </p>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{Component}</Link>;
  }

  return Component;
};
