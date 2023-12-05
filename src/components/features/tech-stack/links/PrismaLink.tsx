import React from "react";
import { SiPrisma } from "react-icons/si";
import { TechStackLink } from "../TechStackLink";

interface Props {}

export const PrismaLink: React.FC<Props> = ({}) => {
  return (
    <TechStackLink
      icon={<SiPrisma className="h-6 w-6" />}
      title="Prisma"
      link="https://www.prisma.io/"
    />
  );
};
