import React from "react";
import { TechStack } from "../tech-stack/TechStack";
import { ReactLink } from "../tech-stack/links/ReactLink";
import { ReduxLink } from "../tech-stack/links/ReduxLink";
import { TSLink } from "../tech-stack/links/TSLink";

interface Props {}

export const Zillow: React.FC<Props> = ({}) => {
  return (
    <>
      <p className="text-lg">
        <span className="font-semibold">Team: </span>
        <a
          href="https://www.zillowhomeloans.com"
          className="cursor-pointer underline underline-offset-2 hover:brightness-90"
        >
          ZHL
        </a>{" "}
        Customer Experience
      </p>
      <div>
        <p className="text-lg">
          <span className="font-semibold">Project:</span> Settings Revamp
        </p>
      </div>
      <div className="flex gap-3">
        <p className="text-lg font-semibold">Stack:</p>
        <TechStack stack={[<ReactLink />, <TSLink />, <ReduxLink />]} />
      </div>
      <ul className="ml-3 list-disc">
        <li>
          Assessed and updated current codebase to use modern JS paradigms
        </li>
        <li>
          Built frontend features utilizing redux state management and internal
          packages/component libraries
        </li>
        <li>Worked closely with mentors to ensure usage of best practices</li>
        <li>
          Developed full-stack internal tool for a company-wide hackweek to
          improve efficiency & productivity of scrum processes
        </li>
      </ul>
    </>
  );
};
