import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import {
  Experience,
  ExperienceCard,
  experienceSheet,
} from "~/components/ExperienceCard";
import { Sheet, SheetContent } from "~/components/general/Sheet";

const experiences: Experience[] = [
  {
    variant: "levanta",
    dates: "Feb 2023 - Present",
    title: "Levanta",
    icon: (
      <Image
        draggable={false}
        alt="Levanta Logo"
        src="/images/levanta-logo-dark.svg"
        width={30}
        height={30}
      />
    ),
    content: (
      <p>
        Building the marketplace where amazon sellers and influencers forge
        affiliate relationships.
      </p>
    ),
  },
  {
    variant: "zillow",
    dates: "Summer 2022",
    title: "Zillow",
    icon: (
      <Image
        draggable={false}
        alt="Zillow Logo"
        src="/images/zillow-small.svg"
        width={37}
        height={37}
      />
    ),
    content: (
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
            Built frontend features utilizing redux state management and
            internal packages/component libraries
          </li>
          <li>Worked closely with mentors to ensure usage of best practices</li>
          <li>
            Developed full-stack internal tool for a company-wide hackweek to
            improve efficiency & productivity of scrum processes
          </li>
        </ul>
      </>
    ),
  },
  {
    variant: "amazon",
    dates: "Winter 2021",
    title: "Amazon",
    icon: (
      <Image
        draggable={false}
        alt="Amazon Logo"
        src="/images/amazon-small.png"
        width={42}
        height={42}
      />
    ),
    content: (
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
          Consistently delivered before deadlines which resulted in the
          expansion of the application above and beyond the original
          deliverables
        </li>
        <li>
          Trained in AWS technologies (Lambda, APIGateway, Fargate, ECS, & more)
        </li>
      </ul>
    ),
  },
  {
    variant: "grovia",
    dates: "Fall 2020",
    title: "Grovia",
    icon: (
      <Image
        draggable={false}
        alt="Grovia Logo"
        src="/images/grovia.jpeg"
        width={45}
        height={45}
      />
    ),
    content: (
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
    ),
  },
  {
    variant: "uw",
    dates: "2019 - 2023",
    title: "University of Washington",
    icon: (
      <Image
        draggable={false}
        alt="UW Logo"
        src="/images/uw-small.svg"
        width={45}
        height={45}
      />
    ),
    content: (
      <p>
        Graduated Fall 2023 from the Paul G. Allen School of Computer Science &
        Engineering with Cum Laude distinction.
      </p>
    ),
  },
];

export default function Home() {
  const router = useRouter();
  const page = router.query.page;
  const experience = experiences.find((e) => e.variant === page);
  const isOpen = !!experience;
  return (
    <>
      <Sheet
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) router.push("/");
        }}
      >
        <SheetContent
          className={experienceSheet({ variant: experience?.variant })}
          isOpen={isOpen}
          position="right"
        >
          {experience && (
            <>
              <div className="mb-10 flex flex-row items-center gap-4">
                <div className="relative h-12 w-12  rounded-full bg-white">
                  <div className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2">
                    {experience.icon}
                  </div>
                </div>
                <p className="text-3xl font-semibold">{experience.title}</p>
              </div>
              <div className="flex w-full max-w-lg flex-col px-2">
                {experience.content}
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
      <div className="container mx-auto flex w-full flex-col items-center">
        <div className="mt-20 flex flex-row items-center gap-3">
          <div className="aspect-square w-24 overflow-hidden rounded-full max-sm:w-16">
            <Image
              alt="Head shot"
              src="/images/headshot-2.jpeg"
              width={100}
              height={100}
              draggable={false}
            />
          </div>
          <div>
            <div className="text-4xl font-semibold max-sm:text-xl">
              Jacob McKenney
            </div>
            <div className="text-md pl-1 font-light max-sm:text-sm">
              <span className="max-sm:hidden">{"Full-Stack "}</span>Software
              Engineer @{" "}
              <a
                className="cursor-pointer font-semibold text-levanta hover:brightness-75"
                href="https://www.levanta.io"
              >
                Levanta
              </a>
            </div>
          </div>
        </div>
        <div className="mb-10 flex w-1/2 flex-row items-center justify-center gap-10 max-sm:mt-5 max-sm:gap-6">
          <a target="_blank" href="https://www.github.com/jacobmckenney">
            <div className="rounded-full border-2 border-tertiary/30 bg-tertiary/30 p-2 text-black transition-all hover:border-black max-sm:border-[1px]">
              <Github className="h-6 w-6 max-sm:h-5 max-sm:w-5" />
            </div>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/jacobmckenney">
            <div className="rounded-full border-2 border-tertiary/30 bg-tertiary/30 p-2 text-black transition-all hover:border-black max-sm:border-[1px]">
              <Linkedin className="h-6 w-6 max-sm:h-5 max-sm:w-5" />
            </div>
          </a>
          <a href="mailto:jacobgmckenney@gmail.com">
            <div className="rounded-full border-2 border-tertiary/30 bg-tertiary/30 p-2 text-black transition-all hover:border-black max-sm:border-[1px]">
              <Mail className="h-6 w-6 max-sm:h-5 max-sm:w-5" />
            </div>
          </a>
        </div>
        <div className="mb-10 flex flex-row flex-wrap items-center justify-center gap-10 px-3">
          {experiences.map((e) => (
            <ExperienceCard key={e.variant} experience={e} />
          ))}
        </div>
      </div>
    </>
  );
}
