import React from "react";
import { FaReact } from "react-icons/fa";
import { TechStackLink } from "../TechStackLink";

interface Props {}

const link = "https://www.react.dev";

export const ReactLink: React.FC<Props> = ({}) => {
  return (
    <TechStackLink
      icon={<FaReact className="h-6 w-6" />}
      title="React"
      link={link}
    />
  );
};
