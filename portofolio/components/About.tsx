import Image from "next/image"

export default function About() {
    return (
      <section id="about-section" className="flex flex-col-reverse gap-8 lg:flex-row container items-center justify-evenly mx-auto">
        <Image
          src="/chibigirl.png"
          height={400}
          width={400}
          alt="image of a cartoon girl holding a computer"
          className="h-[250px] w-[200px] lg:h-[350px] lg:w-[300px]"
        />
        <div className="flex flex-col mx-6 w-4/5 lg:w-2/5 text-justify">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-5">
            About
          </h2>
          <div className="flex flex-col gap-5 text-sm lg:text-base">
            <p className="">
              Hello! I&apos;m a passionate Front-End Engineer with roots in the
              beautiful island of Cyprus. My journey into the world of web
              development began at Aristotle University of Thessaloniki in
              Greece, where I majored in Computer Science. It was there that I
              discovered my love for creating intuitive and dynamic web
              experiences. After graduation, I moved to the vibrant tech
              landscape of Portugal to kickstart my career with an internship at
              Emma – The Sleep Company. This opportunity provided a
              comprehensive foundation in web development, exposing me to a
              variety of technologies and best practices. I began my journey at
              Emma on the mobile development team for the Emma Up sleep app,
              where I delved into Kotlin and Jetpack Compose. This experience
              broadened my skill set and gave me a solid grounding in mobile app
              development. However, it was my subsequent transfer to the Content
              Experience team for Emma&apos;s Online Store that truly sparked my
              passion for front-end development. In the Content Experience team,
              I honed my skills with Vue.js, Nuxt.js, TypeScript, and Sass.
              Working on Emma&apos;s Online Store allowed me to blend creativity
              with technical expertise, creating seamless user experiences. My
              dedication and proficiency in these technologies led to a
              promotion to Junior Software Engineer.
            </p>
            <p>
              Outside of my coding adventures, I enjoy playing games, staying
              active through exercise, and exploring new destinations around the
              world.
            </p>
            <p>
              Currently, I am employed at Emma, but I am open to exploring new
              opportunities where I can contribute my skills and grow as a
              developer.
            </p>
          </div>
        </div>
      </section>
    );
}