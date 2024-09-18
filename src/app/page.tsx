import {
  HomeHero,
  HowWorks,
  OurArtists,
  RedirectPage,
} from "@/components/home";
import { Discovered, Genre, Testimonials } from "@/components/shared";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HowWorks />
      <OurArtists />
      <RedirectPage />
      <Discovered />
      <Testimonials />
      <Genre />
    </main>
  );
}
