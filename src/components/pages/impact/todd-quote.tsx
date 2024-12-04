import { Container } from "@/components/common";
import { P } from "@/components/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

export const ToddQuote: FC = () => {
  return (
    <Container
      className={cn("py-16 md:py-20", "flex items-center justify-center")}
    >
      <Image
        src="./icons/todd-quote.svg"
        width={348}
        height={257}
        alt="todd quote"
      />
      <div>
        <p className="text-5xl leading-[67px] font-light font-outfit text-[#A1A1A2]">
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
