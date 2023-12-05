import React from "react";
import { SiTypescript } from "react-icons/si";
import { TechStackLink } from "../TechStackLink";

interface Props {}

export const TSLink: React.FC<Props> = ({}) => {
  return (
    <TechStackLink
      icon={<SiTypescript className="h-6 w-6" />}
      title="TypeScript"
      link="https://www.typescriptlang.org/"
    />
  );
};
