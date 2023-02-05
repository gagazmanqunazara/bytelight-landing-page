import localFont from "@next/font/local";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Section from "../components/Section";
import SectionThree from "../components/SectionThree";
import SectionTwo from "../components/SectionTwo";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const generalSans = localFont({
  src: [
    {
      path: "../assets/fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
});

const faktum = localFont({
  src: [
    {
      path: "../assets/fonts/Rene Bieder - Faktum Test Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Rene Bieder - Faktum Test Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-faktum",
});

export default function Home() {
  return (
    <div className={`${generalSans.variable} ${faktum.variable} font-sans`}>
      <Header />
      <main className="max-w-[var(--max-page-width)] mx-auto px-8">
        <Hero />
        <Testimonials />
        <Services />
        <Section />
        <SectionTwo />
        <SectionThree />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
