import React from "react";
import { TechStack } from "../tech-stack/TechStack";
import { DjangoLink } from "../tech-stack/links/DjangoLink";
import { LinearLink } from "../tech-stack/links/LinearLink";
import { PythonLink } from "../tech-stack/links/PythonLink";
import { ReactLink } from "../tech-stack/links/ReactLink";
import { TSLink } from "../tech-stack/links/TSLink";

interface Props {}

const stack = [
  <ReactLink />,
  <TSLink />,
  <PythonLink />,
  <DjangoLink />,
  <LinearLink />,
];

export const Grovia: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="flex gap-3">
        <p className="text-lg font-semibold">Tools:</p>
        <TechStack stack={stack} />
      </div>
      <ul className="ml-3 list-disc">
        <li>
          Full-Stack development working directly under company leadership
        </li>
        <li>
          Employing modern technologies such as React, Django, Python, etc. to
          create the best possible user experience for customers
        </li>
        <li>
          Maintaining software development cycle expertise using project
          management tools like GitHub + Linear
        </li>
      </ul>
    </>
  );
};
