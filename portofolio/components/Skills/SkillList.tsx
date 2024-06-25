import SkillItem, { SkillItemProps } from "./SkillsItem";
import { skills, learning } from "./skillData";

export default function SkillList() {
  return (
    <section id="skill-list" className="flex flex-col items-center gap-10 mx-2 scroll-mt-20">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Skills and Tooling</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6">
        {skills.map((skill: SkillItemProps, index: number) => (
          <SkillItem
            key={index}
            iconSrc={skill.iconSrc}
            alt={skill.alt}
            text={skill.text}
          />
        ))}
      </div>
      <h3 className="text-l md:text-xl lg:text-2xl font-semibold">
        Currently Learning
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-6">
        {learning.map((skill: SkillItemProps, index: number) => (
          <SkillItem
            key={index}
            iconSrc={skill.iconSrc}
            alt={skill.alt}
            text={skill.text}
          />
        ))}
      </div>
    </section>
  );
}
