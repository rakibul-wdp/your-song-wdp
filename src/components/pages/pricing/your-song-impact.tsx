import { Container } from "@/components/common";
import { P, Title } from "@/components/typography";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

export const YourSongImpact: FC = () => {
  return (
    <Container className="">
      <div className={cn("relative py-16 lg:py-[220px]")}>
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `
            linear-gradient(270deg, rgba(20, 20, 22, 0) 50.43%, rgba(20, 20, 22, 0.64) 65.91%, #141416 100%),
            url('/images/your-song-impact.jpeg')
            `,
            backgroundBlendMode: "overlay",
            opacity: 0.5,
            zIndex: -1,
          }}
        ></div>

        <div
          className={cn(
            "relative z-10",
            "flex flex-col items-start justify-center"
          )}
        >
          <Title variant="H4">YourSong. Your Impact.</Title>
          <P
            variant="P1"
            className="text-[#A1A1A2] md:w-[65%] mt-6 md:mt-8 mb-10 md:mb-12"
          >
            The right song at the right moment has the power to change your
            life. Break free from conventional playlists and discover new talent
            in a novel way. By investing in emerging artists, you receive a
            custom song to call your own, a piece of its profitability, and the
            gratitude of musicians who can earn money doing what they love—all
            thanks to you.
          </P>
          <Link
            href="/impact"
            className="text-xl leading-6 font-bold font-outfit text-primary-coral flex items-center justify-center gap-x-1"
          >
            Learn More
            <ArrowRight className="" />
          </Link>
        </div>
      </div>
    </Container>
  );
};
