'use client'
import About from "@/components/About";
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
      <main className="main flex flex-col items-center justify-center h-full w-full">
          <Header sectionRefs={refs} />
          <div className="flex flex-col gap-44">
              <Hero />
              <About />

              <div
                  ref={div1Ref}
                  className="h-[1000px] bg-red-200">
                  HELOO
              </div>
              <div
                  ref={div2Ref}
                  className="h-[1000px] bg-purple-200">
                  GRGREG
              </div>
              <div
                  ref={div3Ref}
                  className="h-[1000px] bg-blue-200">
                  ERGERGREG
              </div>
          </div>
      </main>
  );
}
