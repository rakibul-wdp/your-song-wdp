import { cn } from "@/lib/utils";
import { FC } from "react";
import { P, Title } from "../../typography";

export const ArtistsHero: FC = () => {
  return (
    <section className="pt-[75px] md:pt-[82px]">
      <div className={cn("relative py-[120px] lg:py-[160px]")}>
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `
            linear-gradient(180deg, rgba(20, 20, 22, 0.6) 0%, #141416 103.3%),
            url('/images/artists-hero-bg.png')
            `,
            backgroundBlendMode: "overlay",
            opacity: 0.4,
            zIndex: -1,
          }}
        ></div>

        <div
          className={cn(
            "relative z-10",
            "flex flex-col text-center items-center justify-center gap-6",
            "px-3 md:px-0"
          )}
        >
          <Title variant="H3">Explore Our Artists</Title>
          <P variant="P1" className="leading-9 text-[#A1A1A2]">
            With hundreds of handpicked artists across 26 musical genres, <br />
            YourSong has the perfect songwriter for you.
          </P>
        </div>
      </div>
    </section>
  );
};
