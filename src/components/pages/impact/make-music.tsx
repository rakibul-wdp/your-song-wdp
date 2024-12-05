import { Button, Container } from "@/components/common";
import { P, SubTitle } from "@/components/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

interface IMakeMusics {
  id: number;
  img: string;
  title: string;
  description: string;
  small: string;
}

const makeMusics: IMakeMusics[] = [
  {
    id: 1,
    img: "/images/make-music-1.png",
    title: "For Artists. By Artists.",
    description:
      "As music artists ourselves, we created YourSong to help emerging artists advance their careers. Our platform provides fans with a unique way to support great music, form down-to-earth personal connections with artists, and share in their early successes.",
    small: "",
  },
  {
    id: 2,
    img: "/images/make-music-2.png",
    title: "Support Top Talent.",
    description:
      "They’re called “starving artists” for a reason: the early years of a musician’s career can be grueling—with hundreds of songs written before earning a dime. At YourSong, the majority of your investment goes directly to the artist and their production team. In return, you receive an original song to call your own, a piece of its profitability*, and the gratitude of musicians who can focus on what they do best—all thanks to you.",
    small: "*For two years after your song’s release",
  },
];

export const MakeMusic: FC = () => {
  return (
    <Container className="py-[60px] md:py-20">
      <Image
        className="absolute inset-0 top-[65%] md:top-[65%] left-[50%] md:left-[15%] z-0 pointer-events-none"
        src="./icons/bg-icon/artist-bg-1.svg"
        width={150}
        height={150}
        alt="home bg icon one"
      />
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 relative z-10">
        {makeMusics.map(({ id, img, title, description, small }) => (
          <div
            className={cn(
              "relative",
              id === 1 ? "pt-[339px]  md:pb-[72px]" : "pt-[243px] md:pb-[38px]",
              "pb-6 px-4 md:pt-[183px] md:px-16"
            )}
            key={id}
          >
            <div
              className={cn(
                "absolute inset-0 bg-center bg-no-repeat bg-cover",
                "rounded-3xl md:rounded-[32px]"
              )}
              style={{
                backgroundImage: `
                linear-gradient(90deg, rgba(225, 87, 75, 0.6) 0%, rgba(228, 196, 119, 0.6) 53.26%, rgba(79, 155, 143, 0.6) 100%),
                linear-gradient(180deg, rgba(29, 29, 31, 0) 0%, #1D1D1F 65.93%),
                url(${img})
                `,
                backgroundBlendMode: "overlay",
                opacity: 0.5,
                zIndex: -1,
              }}
            ></div>
            <div
              key={id}
              className={cn(
                "relative z-10",
                "flex flex-col items-start justify-center gap-4"
              )}
            >
              <SubTitle variant="H6">{title}</SubTitle>
              <P variant="P2" className="text-[#A1A1A2]">
                {description}
              </P>
              <P variant="P4" className="text-xs text-[#5A5A5B]">
                {small}
              </P>
            </div>
          </div>
        ))}
      </div>

      <div
        className={cn(
          "mt-4 md:mt-6",
          "flex flex-col items-center justify-center gap-6",
          "py-[84px] md:py-[102px]"
        )}
      >
        <SubTitle variant="H4" className="leading-[54px] text-center">
          Let’s make music together.
        </SubTitle>
        <Button variant="default" size="default">
          Create your Song
        </Button>
      </div>
    </Container>
  );
};
