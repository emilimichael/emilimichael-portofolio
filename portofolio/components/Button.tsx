import classNames from "classnames";

interface ButtonProps {
  text: string;
  variant?: "filled" | "outline";
}

export default function Button(props: ButtonProps) {
  const buttonClass = classNames(classNames, {
    "bg-black text-white": props.variant === "filled",
    "border-solid border-2 border-black": props.variant === "outline",
  });

  return (
    <button
      className={`${buttonClass} rounded-3xl px-6 py-2.5 font-medium border-black border-solid border-2 text-sm md:text-base`}
    >
      {props.text}
    </button>
  );
}
