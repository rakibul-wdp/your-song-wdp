import {
  Cost,
  InvestmentGoes,
  PricingHero,
  YourSongImpact,
} from "@/components/pages/pricing";
import { Testimonials } from "@/components/shared";

const Pricing = () => {
  return (
    <main>
      <PricingHero />
      <InvestmentGoes />
      <Cost />
      <Testimonials />
      <YourSongImpact />
    </main>
  );
};

export default Pricing;
