import React from "react";
import { SiPostgresql } from "react-icons/si";
import { TechStackLink } from "../TechStackLink";

interface Props {}

export const PostgresLink: React.FC<Props> = ({}) => {
  return (
    <TechStackLink
      icon={<SiPostgresql className="h-6 w-6" />}
      title="PostgreSQL"
      link="https://www.postgresql.org/"
    />
  );
};
