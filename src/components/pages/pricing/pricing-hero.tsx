import { Button } from "@/components/common";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
import { Title } from "../../typography";

export const PricingHero: FC = () => {
  return (
    <section className="pt-[75px] md:pt-[82px]">
      <div className={cn("relative py-[120px] lg:py-[160px]")}>
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `
            linear-gradient(180deg, rgba(20, 20, 22, 0.6) 0%, #141416 100%),
            url('/images/pricing-hero.png')
            `,
            backgroundBlendMode: "overlay",
            opacity: 0.4,
            zIndex: -1,
          }}
        ></div>

        <div
          className={cn(
            "relative z-10",
            "flex flex-col text-center items-center justify-center gap-8 md:gap-16",
            "px-4 md:px-0",
            "relative"
          )}
        >
          <Image
            className="absolute inset-0 top-[60%] md:top-[55%] left-[80%] md:left-[75%] z-0 pointer-events-none rotate-90"
            src="./icons/bg-icon/artist-bg-1.svg"
            width={150}
            height={150}
            alt="home bg icon one"
          />
          <Title variant="H3">Create Your Song</Title>
          <Button variant="default" size="default">
            Create YOur Song
          </Button>
        </div>
      </div>
    </section>
  );
};
