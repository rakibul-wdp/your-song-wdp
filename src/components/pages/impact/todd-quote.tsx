import { Container } from "@/components/common";
import { P } from "@/components/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

export const ToddQuote: FC = () => {
  return (
    <Container
      className={cn(
        "py-16 md:py-20",
        "lg:w-[90%] relative",
        "flex flex-col md:flex-row items-center justify-center md:gap-[120px]"
      )}
    >
      <Image
        src="./icons/todd-quote.svg"
        width={348}
        height={257}
        alt="todd quote"
        className="w-[127px] h-[94px] md:w-full md:h-full absolute -top-5 -right-8 md:static"
      />
      <div className="flex flex-col items-start justify-center gap-6">
        <p className="text-2xl md:text-5xl md:leading-[67px] font-light font-outfit text-[#A1A1A2]">
          YourSong has opened doors for so many songwriters to make a living
          doing what they love
        </p>
        <P variant="P1" className="font-bold text-[#A1A1A2]">
          -Todd Johnson
        </P>
      </div>
    </Container>
  );
};
