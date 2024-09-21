import { FC } from "react";
import { Container } from "../../common";
import { P, SubTitle } from "../../typography";
import { OurArtistsCarousel } from "./our-artists-carousel";
import { cn } from "@/lib/utils";

export const OurArtists: FC = () => {
  return (
    <Container className="py-10 md:py-20">
      <div
        className={cn(
          "mb-10 md:mb-[60px]",
          "flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-20"
        )}
      >
        <SubTitle variant="H5">Our Artists</SubTitle>
        <P
          variant="P2"
          className="text-[#555557] w-full lg:w-[65%] text-center lg:text-start"
        >
          As artists ourselves, we have an expansive network that allows us to
          bring in undiscovered talent from every corner of the land—from LA’s
          Sunset Strip to Nashville’s Music Row. While they may come from genres
          ranging from punk to funk, all YourSong artists have one thing in
          common: passion for creating music that inspires and impacts
          audiences—and people just like you.
        </P>
      </div>

      <OurArtistsCarousel />
    </Container>
  );
};
