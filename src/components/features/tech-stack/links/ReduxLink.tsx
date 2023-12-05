import React from "react";
import { SiRedux } from "react-icons/si";
import { TechStackLink } from "../TechStackLink";

interface Props {}

export const ReduxLink: React.FC<Props> = ({}) => {
  return (
    <TechStackLink
      icon={<SiRedux className="h-6 w-6" />}
      title="Redux"
      link="https://redux.js.org/"
    />
  );
};
