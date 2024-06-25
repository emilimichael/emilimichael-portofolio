export type ExperienceCardProps = {
  title: string;
  position: string;
  date: string;
  description: string;
  points?: string[];
  isLast?: boolean
};

export default function ExperienceCard(props: ExperienceCardProps) {
  return (
    <li
      className={`flex pb-20 relative justify-center gap-4 ${
        props.isLast ? "pb-0 " : "pb-20"
      }`}
    >
      <div
        className={`h-2 w-2 rounded-full bg-gray-400 before:absolute before:w-0.5 before:ml-[3px] before:bg-gray-400 ${
          props.isLast ? "before:h-0 " : "before:h-full"
        }`}
      />
      <div className="bg-white w-3/4 lg:w-3/5 xl:w-2/5 flex flex-col justify-center rounded-xl p-4 gap-1 shadow-xl">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">{props.title}</h3>
          <span className="text-xs">{props.date}</span>
        </div>
        <div className="flex gap-1 flex-col">
          <h4 className="font-extrabold">{props.position}</h4>
          <p className="text-xs md:text-sm ">{props.description}</p>
          {props.points && props.points.length > 0 && (
            <ul className="list-inside">
              {props.points.map((item, index) => (
                <li className="text-xs md:text-sm list-disc mb-2" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}
