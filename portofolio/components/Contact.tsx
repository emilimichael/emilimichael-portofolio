import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col justify-center items-center mx-2 gap-5">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
        Contact
      </h2>
      <p className="text-sm pl-1 md:text-lg lg:text-xl font-normal text-center text-gray-700">
        If you are interested feel free to drop me a message or send me an
        email.
      </p>
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex gap-6 items-center">
          <a href="https://www.linkedin.com/in/emili-michael/">
            <Image
              alt="linked-in icon"
              src="/Icons/linked-in.svg"
              width={45}
              height={45}
              className="md:size-[75px]"
            />
          </a>
          <a href="https://github.com/emilimichael">
            <Image
              alt="Github Icon"
              src="/Skills/github.png"
              width={45}
              height={45}
              className="md:size-[75px]"
            />
          </a>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <Image
            alt="Email Icon"
            src="/Icons/email.png"
            width={45}
            height={45}
            className="md:size-[75px]"
          />
          <p> emilimichael@outlook.com</p>
        </div>
      </div>
    </section>
  );
}
