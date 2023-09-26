import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center">
        <div className="mt-20 flex flex-row items-center gap-3">
          <div className="aspect-square w-24 overflow-hidden rounded-full">
            <Image
              alt="Head shot"
              src="/images/headshot-2.jpeg"
              width={100}
              height={100}
            />
          </div>
          <div>
            <div className="text-4xl font-semibold">Jacob McKenney</div>
            <div className="pl-1 text-sm font-light">
              Full-Stack Software Engineer @{" "}
              <a
                className="text-levanta cursor-pointer font-semibold hover:brightness-110"
                href="https://www.levanta.io"
              >
                Levanta
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
