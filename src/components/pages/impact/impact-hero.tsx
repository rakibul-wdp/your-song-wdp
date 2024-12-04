import { Button } from "@/components/common";
import { P, Title } from "@/components/typography";
import { cn } from "@/lib/utils";
import { FC } from "react";

export const ImpactHero: FC = () => {
  return (
    <section className="pt-[75px] md:pt-[82px]">
      <div className={cn("relative py-[120px]")}>
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `
            linear-gradient(288.42deg, #141416 41.01%, rgba(20, 20, 22, 0) 90.62%),
            linear-gradient(90deg, #E1574B 8.29%, #E4C477 45.36%, #4F9B8F 91.72%),
            url('/images/impact-hero-bg.png')
            `,
            backgroundBlendMode: "overlay",
            opacity: 0.4,
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
          <Title variant="H3" className="capitalize">
            Changing the world <br /> one song at a time
          </Title>
          <P variant="P1" className="leading-9 text-[#A1A1A2]">
            YourSong is for those who love music, enjoy sharing it with others,
            and want to support those that create it.
          </P>
          <Button variant="default" size="default" className="mt-6 md:mt-14">
            Create Your Song
          </Button>
        </div>
      </div>
    </section>
  );
};
