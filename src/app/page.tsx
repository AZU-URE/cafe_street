"use client";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import HowTo from "@/components/howTo";
import About from "@/components/about";
import Menu from "@/components/menu";
import Testimonial from "@/components/testimonial";
import Newsletter from "@/components/newsletter";
export default function home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <HowTo />
      <About />
      <Menu />
      <Testimonial />
      <Newsletter />
    </div>
  );
}
