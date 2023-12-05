import React from "react";
import { SiLinear } from "react-icons/si";
import { TechStackLink } from "../TechStackLink";

interface Props {}

export const LinearLink: React.FC<Props> = ({}) => {
  return (
    <TechStackLink
      icon={<SiLinear className="h-6 w-6" />}
      title="Linear"
      link="https://linear.app/"
    />
  );
};
