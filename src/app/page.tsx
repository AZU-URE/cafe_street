"use client";
import Hero from "@/components/landingPage/hero";
import HowTo from "@/components/landingPage/howTo";
import About from "@/components/landingPage/about";
import Menu from "@/components/landingPage/menu";
import Testimonial from "@/components/landingPage/testimonial";
import Newsletter from "@/components/landingPage/newsletter";
export default function home() {
  return (
    <div className="">
      <Hero />
      <HowTo />
      <About />
      <Menu />
      <Testimonial />
      <Newsletter />
    </div>
  );
}
