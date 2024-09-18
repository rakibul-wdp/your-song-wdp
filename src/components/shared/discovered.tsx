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
        "flex items-center justify-center"
      )}
    >
      <div>
        <Title variant="H4">Are You an Artist? Get Discovered.</Title>
        <P variant="P2" className="leading-8 font-light text-[#A1A1A2]">
          Join our platform and earn money doing what you love. Our supporters
          care about producing quality songs with broad commercial appeal that
          you’ll be proud to claim. <br /> With decades of industry experience
          and a user-friendly platform, we make it easy for you to get noticed,
          promote your music, track your royalties, and make life-long fans.
        </P>
        <Button variant="default" size="default">
          Apply now
        </Button>
      </div>

      <div>
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
