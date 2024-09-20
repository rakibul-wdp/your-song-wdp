import {
  HomeHero,
  HowWorks,
  OurArtists,
  RedirectPage,
} from "@/components/pages/home";
import { Discovered, Genre, Testimonials } from "@/components/shared";
import { NextPage } from "next";

const Home: NextPage = () => {
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
};

export default Home;
