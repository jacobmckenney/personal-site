import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

interface Props {}

export const Zillow: React.FC<Props> = ({}) => {
  return (
    <>
      {" "}
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
        <div className="flex flex-row gap-2">
          <a href="https://www.react.dev" className="hover:brightness-90">
            <FaReact className="h-6 w-6" />
          </a>
          <a
            href="https://www.typescriptlang.org/"
            className="hover:brightness-90"
          >
            <SiTypescript className="h-6 w-6" />
          </a>
        </div>
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
