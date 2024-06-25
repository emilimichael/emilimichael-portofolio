import ExperienceCard, { ExperienceCardProps } from "./ExperienceCard";
import { experienceData } from "./experienceData";

export default function ExperienceSection() {
    return (
      <section id="experience-section" className="flex flex-col gap-10 justify-center items-center container scroll-mt-20">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
          My Experience
        </h2>
        <ol>
          {experienceData.map(
            (experience: ExperienceCardProps, index: number) => (
              <ExperienceCard
                key={index}
                title={experience.title}
                position={experience.position}
                date={experience.date}
                description={experience.description}
                isLast={experience.isLast}
                points={experience.points}
              />
            )
          )}
        </ol>
      </section>
    );
}