import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Amazon } from "~/components/Amazon";
import {
  Experience,
  ExperienceCard,
  experienceSheet,
} from "~/components/ExperienceCard";
import { Grovia } from "~/components/Grovia";
import { Levanta } from "~/components/Levanta";
import { Zillow } from "~/components/Zillow";
import { Sheet, SheetContent } from "~/components/general/Sheet";
import { UW } from "~/components/general/UW";

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
    content: <Levanta />,
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
    content: <Zillow />,
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
    content: <Amazon />,
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
    content: <Grovia />,
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
    content: <UW />,
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
