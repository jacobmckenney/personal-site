import React from "react";

import { Tooltip } from "../../general/Tooltip";
interface Props {
  icon: React.ReactElement;
  title: string;
  link: string;
}

export const TechStackLink: React.FC<Props> = ({ icon, title, link }) => {
  return (
    <Tooltip content={title} delayDuration={500} sideOffset={3}>
      <a href={link} className="hover:brightness-90" target="_blank">
        {icon}
      </a>
    </Tooltip>
  );
};
