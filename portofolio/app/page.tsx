'use client'
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import { useRef } from "react";

const Header = dynamic(
    () => import('@/components/Navigation/Header'),
    { ssr: false }
);

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const div1Ref = useRef<HTMLDivElement | null>(null);
  const div2Ref = useRef<HTMLDivElement | null>(null);
  const div3Ref = useRef<HTMLDivElement | null>(null);

  const refs = [heroRef, div1Ref, div2Ref, div3Ref]
  return (
      <main className="main flex flex-col justify-center h-full w-full">
          <Header sectionRefs={refs} />
          <Hero/>
          <div ref={heroRef} className="h-[1000px]">ABOUT</div>
          <div ref={div1Ref} className="h-[1000px] bg-red-200">
              HELOO
          </div>
          <div ref={div2Ref} className="h-[1000px] bg-purple-200">
              GRGREG
          </div>
          <div ref={div3Ref} className="h-[1000px] bg-blue-200">
              ERGERGREG
          </div>
      </main>
  );
}
