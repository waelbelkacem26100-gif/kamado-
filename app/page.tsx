import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ValueProp from "@/components/sections/ValueProp";
import Offers from "@/components/sections/Offers";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ValueProp />
      <Offers />
      <Projects />
      <Process />
      <Testimonials />
      <ContactForm />
    </>
  );
}
