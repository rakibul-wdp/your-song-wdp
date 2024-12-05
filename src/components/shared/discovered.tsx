import Image from "next/image";
import { FC } from "react";
import { Button, Container } from "../common";
import { P, Title } from "../typography";
import { cn } from "@/lib/utils";

export const Discovered: FC = () => {
  return (
    <Container
      className={cn(
        "py-16 md:py-[51.47px]",
        "flex flex-col md:flex-row items-center justify-center gap-16",
        "relative"
      )}
    >
      <Image
        className="absolute inset-0 top-5 left-[50%] z-0 pointer-events-none hidden lg:block"
        src="./icons/bg-icon/home-bg-icon-3.svg"
        width={70}
        height={66}
        alt="home bg icon one"
      />
      <div className="flex-1">
        <Title variant="H4" className="text-center md:text-start">
          Are You an Artist? Get Discovered.
        </Title>
        <P
          variant="P2"
          className="leading-8 font-light text-[#A1A1A2] mt-6 mb-10"
        >
          Join our platform and earn money doing what you love. Our supporters
          care about producing quality songs with broad commercial appeal that
          you’ll be proud to claim. <br /> <br /> With decades of industry
          experience and a user-friendly platform, we make it easy for you to
          get noticed, promote your music, track your royalties, and make
          life-long fans.
        </P>
        <Button variant="default" size="default" className="w-full sm:w-fit">
          Apply now
        </Button>
      </div>

      <div className="flex-1">
        <Image
          src="/images/discovered.svg"
          width={693}
          height={721}
          alt="discovered"
        />
      </div>
    </Container>
  );
};
