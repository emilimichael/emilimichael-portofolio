import React from "react";

type NavItemProps = {
  text: string;
  onClick: () => void;
};

export default function NavItem(props: NavItemProps) {
  

  return (
    <button
      className="text-black font-medium text-xl  m-4 lg:m-4 relative group"
      onClick={props.onClick}
    >
      {props.text}
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"/>
    </button>
  );
}
