import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="Hero flex flex-row gap-2 md:gap-8 justify-center h-[40vh] items-center mx-6 ">
      <div className="flex flex-col gap-4 justify-center">
        <div>
          <h1 className="text-2xl pl-1 md:text-4xl lg:text-6xl font-bold pb-2">
            Hello! I&apos;m Emili.
          </h1>
          <h3 className="text-l pl-1 md:text-xl lg:text-2xl font-normal">
            I&apos;m a Front End Engineer.
          </h3>
        </div>
        <div className="flex flex-row flex-wrap gap-2 items-start w-full">
          <Button variant="filled" text="My Resume" />
          <Button variant="outline" text="Contact Me" />
        </div>
      </div>
      <Image
        src="/profile.jpg"
        alt="Picture of Emili Michael"
        width={800}
        height={800}
        className="size-[125px] sm:size-[175px] md:size-[250px] rounded-full my-5"
      />
    </section>
  );
}
