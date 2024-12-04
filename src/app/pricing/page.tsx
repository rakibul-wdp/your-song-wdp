import {
  Cost,
  InvestmentGoes,
  PricingHero,
  YourSongImpact,
} from "@/components/pages/pricing";
import { FAQ, Testimonials } from "@/components/shared";

const Pricing = () => {
  return (
    <main>
      <PricingHero />
      <InvestmentGoes />
      <Cost />
      <Testimonials />
      <YourSongImpact />
      <FAQ />
    </main>
  );
};

export default Pricing;
