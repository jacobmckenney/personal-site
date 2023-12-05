import React from "react";
import { TechStack } from "../tech-stack/TechStack";
import { NextJSLink } from "../tech-stack/links/NextJSLink";
import { PostgresLink } from "../tech-stack/links/PostgresLink";
import { PrismaLink } from "../tech-stack/links/PrismaLink";
import { TRPCLink } from "../tech-stack/links/TRPCLink";
import { TailwindLink } from "../tech-stack/links/TailwindLink";

const techStack = [
  <NextJSLink />,
  <PostgresLink />,
  <TRPCLink />,
  <PrismaLink />,
  <TailwindLink />,
];

interface Props {}

export const Levanta: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="flex gap-3">
        <p className="text-lg font-semibold">Tools:</p>
        <TechStack stack={techStack} />
      </div>
      <p>
        Building the marketplace where amazon sellers and influencers forge
        affiliate relationships.
      </p>
    </>
  );
};
