import React from "react";
import { SiPython } from "react-icons/si";
import { TechStackLink } from "../TechStackLink";

interface Props {}

export const PythonLink: React.FC<Props> = ({}) => {
  return (
    <TechStackLink
      icon={<SiPython className="h-6 w-6" />}
      title="Python"
      link="https://www.python.org/"
    />
  );
};
