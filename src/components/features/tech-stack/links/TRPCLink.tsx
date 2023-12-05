import React from "react";
import { SiTrpc } from "react-icons/si";
import { TechStackLink } from "../TechStackLink";

interface Props {}

export const TRPCLink: React.FC<Props> = ({}) => {
  return (
    <TechStackLink
      icon={<SiTrpc className="h-6 w-6" />}
      title="TRPC"
      link="https://trpc.io"
    />
  );
};
