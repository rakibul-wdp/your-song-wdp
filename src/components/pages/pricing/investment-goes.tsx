import { Container } from "@/components/common";
import { P, SubTitle } from "@/components/typography";
import Image from "next/image";
import { FC } from "react";

interface IInvestmentGoes {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const investmentGoes: IInvestmentGoes[] = [
  {
    id: 1,
    icon: "/icons/song-writing.svg",
    title: "Songwriting & Recording",
    description:
      "Our platform was created by musicians for musicians and fans. YourSong pays artists generously so they can focus on creating meaningful original music for you.",
  },
  {
    id: 2,
    icon: "/icons/engineering.svg",
    title: "Engineering & Production",
    description:
      "All songs are mixed and mastered by professional sound engineers. The result is a studio-quality song that you and your artist will be proud to share with everyone.",
  },
  {
    id: 3,
    icon: "/icons/marketing.svg",
    title: "Marketing & Distribution",
    description:
      "Your Song promotes and distributes original songs to every major streaming platform. Our technology makes it easy for artists to showcase their talent, connect and collaborate with fans, and track royalties* across all major platforms.",
  },
];

export const InvestmentGoes: FC = () => {
  return (
    <Container className="py-16 md:py-20 flex flex-col items-center justify-center">
      <SubTitle variant="H5" className="mb-10">
        Where Your Investment Goes
      </SubTitle>

      <div className="flex items-center justify-between">
        {investmentGoes.map(({ id, icon, title, description }) => (
          <div key={id}>
            <Image src={icon} width={29} height={29} alt="investmentGoes" />
            <SubTitle variant="H8" className="leading-7">
              {title}
            </SubTitle>
            <P variant="P3" className="text-[#A1A1A2]">
              {description}
            </P>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <P variant="P4" className="text-xs text-[#5A5A5B]">
          <span className="text-primary-coral">*</span>Earn a share of the
          royalties for 2 years. <br />{" "}
          <span className="text-primary-coral">*</span>Love your song? Leave a
          tip. 100% of your donation goes directly to the artist.
        </P>
      </div>
    </Container>
  );
};
