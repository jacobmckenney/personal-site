import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { ExperienceCard } from "~/components/ExperienceCard";

export default function Home() {
  return (
    <>
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
            <div className="text-md pl-1 font-light max-sm:text-xs">
              Full-Stack Software Engineer @{" "}
              <a
                className="cursor-pointer font-semibold text-levanta hover:brightness-75"
                href="https://www.levanta.io"
              >
                Levanta
              </a>
            </div>
          </div>
        </div>
        <div className="mb-10 flex w-1/2 flex-row items-center justify-center gap-10 max-sm:mt-5 max-sm:gap-4">
          <a target="_blank" href="https://www.github.com/jacobmckenney">
            <div className="rounded-full border-2 border-tertiary/30 bg-tertiary/30 p-2 text-black hover:border-black max-sm:border-[1px] max-sm:p-1.5">
              <Github className="h-6 w-6 max-sm:h-4 max-sm:w-4" />
            </div>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/jacobmckenney">
            <div className="rounded-full border-2 border-tertiary/30 bg-tertiary/30 p-2 text-black hover:border-black max-sm:border-[1px] max-sm:p-1.5">
              <Linkedin className="h-6 w-6 max-sm:h-4 max-sm:w-4" />
            </div>
          </a>
          <a href="mailto:jacobgmckenney@gmail.com">
            <div className="rounded-full border-2 border-tertiary/30 bg-tertiary/30 p-2 text-black hover:border-black max-sm:border-[1px] max-sm:p-1.5">
              <Mail className="h-6 w-6 max-sm:h-4 max-sm:w-4" />
            </div>
          </a>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-10 px-3">
          <ExperienceCard
            experience={{
              variant: "uw",
              dates: "2019 - 2023",
              title: "University of Washington",
              icon: (
                <Image
                  draggable={false}
                  alt="UW Logo"
                  src="/images/uw.png"
                  width={50}
                  height={50}
                />
              ),
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ExperienceCard>
          <ExperienceCard
            experience={{
              variant: "grovia",
              dates: "Fall 2020",
              title: "Grovia",
              icon: (
                <Image
                  draggable={false}
                  alt="Grovia Logo"
                  src="/images/grovia-long.png"
                  width={100}
                  height={30}
                />
              ),
            }}
          >
            <ul className="list-disc">
              <li>
                Full-Stack development working directly under company leadership
              </li>
              <li>
                Employing modern technologies such as React, Django, Python,
                etc. to create the best possible user experience for customers
              </li>
              <li>
                Maintaining software development cycle expertise using project
                management tools like GitHub + Linear
              </li>
            </ul>
          </ExperienceCard>
          <ExperienceCard
            experience={{
              variant: "zillow",
              dates: "Summer 2022",
              title: "Zillow",
              icon: (
                <div className="rounded-xl bg-white px-2 py-1">
                  <Image
                    draggable={false}
                    alt="Zillow Logo"
                    src="/images/zillow-logo.png"
                    width={100}
                    height={50}
                  />
                </div>
              ),
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ExperienceCard>
          <ExperienceCard
            experience={{
              variant: "amazon",
              dates: "Winter 2021",
              title: "Amazon",
              icon: (
                <Image
                  draggable={false}
                  alt="Amazon Logo"
                  src="/images/amazon-logo.png"
                  width={100}
                  height={30}
                />
              ),
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ExperienceCard>

          <ExperienceCard
            experience={{
              variant: "levanta",
              dates: "Feb 2023 - Present",
              title: "Levanta",
              icon: (
                <div className="rounded-xl bg-white px-2 py-1">
                  <Image
                    draggable={false}
                    alt="Levanta Logo"
                    src="/images/levanta-logo-dark.svg"
                    width={25}
                    height={25}
                  />
                </div>
              ),
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ExperienceCard>
        </div>
      </div>
    </>
  );
}
