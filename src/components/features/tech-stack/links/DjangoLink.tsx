import React from "react";
import { SiDjango } from "react-icons/si";
import { TechStackLink } from "../TechStackLink";

interface Props {}

export const DjangoLink: React.FC<Props> = ({}) => {
  return (
    <TechStackLink
      icon={<SiDjango className="h-6 w-6" />}
      title="Django"
      link="https://www.djangoproject.com/"
    />
  );
};
