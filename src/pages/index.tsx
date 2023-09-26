import Image from "next/image";
import { ExperienceCard } from "~/components/ExperienceCard";

export default function Home() {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center">
        <div className="mt-20 flex flex-row items-center gap-6">
          <div className="aspect-square w-24 overflow-hidden rounded-full">
            <Image
              alt="Head shot"
              src="/images/headshot-2.jpeg"
              width={100}
              height={100}
              draggable={false}
            />
          </div>
          <div>
            <div className="text-4xl font-semibold">Jacob McKenney</div>
            <div className="text-md pl-1 font-light">
              Full-Stack Software Engineer @{" "}
              <a
                className="text-levanta cursor-pointer font-semibold hover:brightness-75"
                href="https://www.levanta.io"
              >
                Levanta
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <ExperienceCard
            experience={{
              variant: "uw",
              title: "University of Washington",
              icon: (
                <Image
                  alt="UW Logo"
                  src="/images/uw.png"
                  width={30}
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
              variant: "grovia",
              title: "Grovia",
              icon: (
                <Image
                  alt="Grovia Logo"
                  src="/images/grovia-long.png"
                  width={100}
                  height={30}
                />
              ),
            }}
          ></ExperienceCard>
        </div>
      </div>
    </>
  );
}
