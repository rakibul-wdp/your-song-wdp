import { Button, Container } from "@/components/common";
import { P, SubTitle } from "@/components/typography";
import { cn } from "@/lib/utils";
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
      <div>
        {makeMusics.map(({ id, img, title, description, small }) => (
          <div key={id} style={{ backgroundImage: `url('${img}')` }}>
            <SubTitle variant="H6">{title}</SubTitle>
            <P variant="P2" className="text-[#A1A1A2]">
              {description}
            </P>
            <P variant="P4" className="text-xs text-[#5A5A5B]">
              {small}
            </P>
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
        <SubTitle variant="H4" className="leading-[54px]">
          Let’s make music together.
        </SubTitle>
        <Button variant="default" size="default">
          Create your Song
        </Button>
      </div>
    </Container>
  );
};
