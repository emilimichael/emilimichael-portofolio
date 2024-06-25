'use client'
import About from "@/components/About";
import Contact from "@/components/Contact";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SkillList from "@/components/Skills/SkillList";
import dynamic from "next/dynamic";

const Header = dynamic(
    () => import('@/components/Navigation/Header'),
    { ssr: false }
);

export default function Home() {
  

  const sectionIDs = ["about-section", "skill-list", "experience-section", "contact"]
  return (
      <main className="main flex flex-col items-center justify-center h-full w-full">
          <Header sectionIDs={sectionIDs} />
          <div className="flex flex-col gap-32">
                <Hero />
                <About />
                <SkillList/>
                <ExperienceSection/>
                <Contact/>
                <Footer/>
          </div>
      </main>
  );
}
