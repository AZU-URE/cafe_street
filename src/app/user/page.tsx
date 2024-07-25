"use client";
import Hero from "@/components/landingPage/hero";
import HowTo from "@/components/landingPage/howTo";
import About from "@/components/landingPage/about";
import Menu from "@/components/landingPage/menu";
import Testimonial from "@/components/landingPage/testimonial";
import Newsletter from "@/components/landingPage/newsletter";
import Navbar from "@/components/navbar";
export default function home() {
  // console.log(window.location.origin);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <HowTo />
      <About />
      {/* <Menu /> */}
      <Testimonial />
      <Newsletter />
    </div>
  );
}
