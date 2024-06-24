'use-client'
import React, { useEffect, useState } from "react";
import NavItem from "./NavItem.";
import Image from "next/image";


type HeaderProps = {
    sectionRefs: React.RefObject<HTMLDivElement | null>[];
}
export default function Header(props: HeaderProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

     useEffect(() => {
       setIsVisible(true);
     }, []);
     
    const navItems = [
      { id: 1, text: "About" },
      { id: 2, text: "Skills" },
      { id: 3, text: "Experience" },
      { id: 5, text: "Contact" },
    ]; 

     const toggleIsOpen = () => {
       setIsOpen((prevState) => !prevState);
     };

    const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      toggleIsOpen();
      }
    };

  return (
    <header
      className={`bg-white w-full shadow-xl mb-12   ${
        isVisible ? "navbar-slide-in " : ""
      }`}
    >
      <button onClick={toggleIsOpen} className="lg:hidden flex items-center m-3">
        <Image
          src="/Icons/menuIcon.svg"
          alt="toggle menu"
          height={40}
          width={40}
        />
      </button>
      <nav
        className={`mobile-nav  h-[100vh] px-6 bg-white  absolute left-0 lg:hidden z-10 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } duration-300 ease-in-out`}
      >
        <ul className="flex flex-col">
          {navItems.map((item, index) => (
            <NavItem
              key={item.id}
              text={item.text}
              onClick={() => scrollToSection(props.sectionRefs[index])}
            />
          ))}
        </ul>
      </nav>
      <nav className="desktop-nav hidden lg:flex justify-end pr-8 w-full">
        <ul className="">
          {navItems.map((item, index) => (
            <NavItem
              key={item.id}
              text={item.text}
              onClick={() => scrollToSection(props.sectionRefs[index])}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}
