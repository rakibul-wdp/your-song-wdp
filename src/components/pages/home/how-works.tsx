import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../../common";
import { P, SubTitle } from "../../typography";
import { Slider } from "./slider";

export const HowWorks: FC = () => {
  return (
    <Container className={cn("py-16 md:pt-10 md:pb-20")}>
      <div className="flex flex-col items-center justify-center gap-4 mb-12">
        <SubTitle variant="H5">How it works</SubTitle>
        <P variant="P2" className="leading-10 text-[#555557]">
          YourSong in 6 Steps
        </P>
      </div>

      <div className="w-full">
        <Slider />
      </div>
    </Container>
  );
};
