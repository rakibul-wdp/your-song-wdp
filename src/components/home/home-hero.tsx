import { cn } from "@/lib/utils";
import { FC } from "react";
import { Button } from "../common";
import { P, Title } from "../typography";

export const HomeHero: FC = () => {
  return (
    <section className="pt-[75px] md:pt-[82px]">
      <div className={cn("relative py-[120px] lg:pt-[160px] lg:pb-[120px]")}>
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `
            linear-gradient(180deg, rgba(20, 20, 22, 0.6) 0%, #141416 86.26%),
            url('/images/hero-bg.jpeg')
            `,
            backgroundBlendMode: "overlay",
            opacity: 0.33,
            zIndex: -1,
          }}
        ></div>

        <div
          className={cn(
            "relative z-10",
            "flex flex-col text-center items-center justify-center gap-4 md:gap-2",
            "px-4 md:px-0"
          )}
        >
          <Title variant="H2">
            <span className="text-primary-yellow">Your Story.</span> Your Song.
          </Title>
          <P variant="P1" className="text-white/65">
            Find your artist, and create something beautiful together.
          </P>
          <Button variant="default" size="default" className="mt-6 md:mt-14">
            Create Your Song
          </Button>
        </div>
      </div>
    </section>
  );
};
