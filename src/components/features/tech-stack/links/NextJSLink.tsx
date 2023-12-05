import React from "react";
import { SiNextdotjs } from "react-icons/si";
import { TechStackLink } from "../TechStackLink";

interface Props {}

export const NextJSLink: React.FC<Props> = ({}) => {
  return (
    <TechStackLink
      icon={<SiNextdotjs className="h-6 w-6" />}
      title="NextJS"
      link="https://nextjs.org/"
    />
  );
};
