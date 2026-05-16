import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import LogoCarousel from "@/components/sections/LogoCarousel";
import ValueProp from "@/components/sections/ValueProp";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Offers from "@/components/sections/Offers";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: `${SITE_NAME} — Agence Web & SaaS`,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <LogoCarousel />
      <ValueProp />
      <ServicesGrid />
      <Offers />
      <Projects />
      <Process />
      <Testimonials />
      <ContactForm />
    </>
  );
}
