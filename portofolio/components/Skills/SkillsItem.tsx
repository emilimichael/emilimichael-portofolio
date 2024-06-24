import Image from "next/image"
export type SkillItemProps = {
    iconSrc: string;
    alt: string;
    text: string;
}

export default function SkillItem(props: SkillItemProps) {
    return (
        <div className="bg-white w-full  p-4 rounded-2xl shadow-lg shadow-rose-600 flex justify-center gap-2 items-center">
            <Image src= {props.iconSrc} alt = {props.alt} height = {100} width = {100} className="h-12 md:h-14 w-14 md:w-16" />
            <span className="font-bold text-xs md:text-sm lg:text-base">{props.text}</span>
        </div>
    )
}