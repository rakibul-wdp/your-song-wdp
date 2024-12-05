import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
import { Container } from "../../common";
import { P, SubTitle } from "../../typography";
import { Slider } from "./slider";

export const HowWorks: FC = () => {
  return (
    <Container className={cn("py-16 md:pt-10 md:pb-20", "relative")}>
      <Image
        className="absolute inset-0 top-7 md:-top-12 right-0 z-0 pointer-events-none"
        src="./icons/bg-icon/home-bg-icon-1.svg"
        width={1717}
        height={377}
        alt="home bg icon one"
      />

      <div className="flex flex-col items-center justify-center gap-4 mb-12 relative z-10">
        <SubTitle variant="H5">How it works</SubTitle>
        <P variant="P2" className="leading-10 text-[#555557]">
          YourSong in 6 Steps
        </P>
      </div>

      <div className="w-full relative z-10">
        <Slider />
      </div>
    </Container>
  );
};
