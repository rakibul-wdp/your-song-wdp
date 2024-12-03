import {
  Discovered,
  HomeHero,
  HowWorks,
  OurArtists,
  RedirectPage,
} from "@/components/home";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HowWorks />
      <OurArtists />
      <RedirectPage />
      <Discovered />
    </main>
  );
}
