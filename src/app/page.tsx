"use client";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import HowTo from "@/components/howTo";
import About from "@/components/about";
export default function home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <HowTo />
      <About />
    </div>
  );
}
