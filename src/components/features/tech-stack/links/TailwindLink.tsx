import React from "react";
import { SiTailwindcss } from "react-icons/si";
import { TechStackLink } from "../TechStackLink";

interface Props {}

export const TailwindLink: React.FC<Props> = ({}) => {
  return (
    <TechStackLink
      icon={<SiTailwindcss className="h-6 w-6" />}
      title="Tailwind"
      link="https://tailwindcss.com/"
    />
  );
};
