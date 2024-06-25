import classNames from "classnames";

interface ButtonProps {
  text: string;
  variant: "filled" | "outline";
  is: "button" | "anchor";
  src?: string;
  download?: string;
  onClick?: () => void;
} 

export default function Button(props: ButtonProps) {
  const buttonClass = classNames(classNames, {
    "bg-black text-white": props.variant === "filled",
    "border-solid border-2 border-black": props.variant === "outline",
    "rounded-3xl px-6 py-2.5 font-medium border-black border-solid border-2 text-sm md:text-base": true,
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (props.is === 'button') {
     return (
   <button
      className={buttonClass}
      onClick={props.onClick}
    >
      {props.text}
    </button>
    ) 
  } else if (props.is === 'anchor') {
    return (
      <a href={props.src} download={props.download} className={buttonClass}>
        {props.text}
      </a>
    );
    
  }
  
}
