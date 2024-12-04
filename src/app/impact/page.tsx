import { ImpactHero, MakeMusic, ToddQuote } from "@/components/pages/impact";
import { Discovered, Genre, Testimonials } from "@/components/shared";

const Impact = () => {
  return (
    <main>
      <ImpactHero />
      <MakeMusic />
      <ToddQuote />
      <Testimonials />
      <Genre />
      <Discovered />
    </main>
  );
};

export default Impact;
