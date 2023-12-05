import React from "react";

interface Props {}

export const Amazon: React.FC<Props> = ({}) => {
  return (
    <ul className="ml-3 list-disc">
      <li>
        Built from scratch a proof-of-concept user interface to help in the
        process of service onboarding
      </li>
      <li>
        Implemented complex parsing and validation logic via NextJS endpoints
      </li>
      <li>
        Collaborated with senior engineers & managers to design a bespoke
        application for the customer
      </li>
      <li>
        Consistently delivered before deadlines which resulted in the expansion
        of the application above and beyond the original deliverables
      </li>
      <li>
        Trained in AWS technologies (Lambda, APIGateway, Fargate, ECS, & more)
      </li>
    </ul>
  );
};
