import { Button, Container } from "@/components/common";
import { P, SubTitle } from "@/components/typography";
import Image from "next/image";
import { FC } from "react";

interface IFeeCovers {
  id: number;
  cover: string;
}
interface IIncludes {
  id: number;
  include: string;
}
interface IFeeCoversDetails {
  id: number;
  title: string;
  includes: IIncludes[];
}

const feeCoversDetails: IFeeCoversDetails[] = [
  {
    id: 1,
    title: "Collaboration",
    includes: [
      {
        id: 9,
        include: "1 hour kickoff call",
      },
      {
        id: 10,
        include: "1 week of songwriting & recording",
      },
      {
        id: 11,
        include: "1 original song (3-5 min)",
      },
    ],
  },
  {
    id: 2,
    title: "Production",
    includes: [
      {
        id: 15,
        include: "Quality control process",
      },
      {
        id: 16,
        include: "Professional mix & master",
      },
      {
        id: 17,
        include: "Studio quality, shareable song",
      },
      {
        id: 18,
        include: "Track song progress in real-time",
      },
    ],
  },
  {
    id: 3,
    title: "Promotion",
    includes: [
      {
        id: 20,
        include: "Artist spotlight page",
      },
      {
        id: 21,
        include: "Streaming",
      },
      {
        id: 22,
        include: "distribution",
      },
      {
        id: 23,
        include: "Royalty tracking",
      },
    ],
  },
];

const feeCovers: IFeeCovers[] = [
  {
    id: 1,
    cover: "Collaboration",
  },
  {
    id: 2,
    cover: "Production",
  },
  {
    id: 3,
    cover: "Promotion",
  },
];

export const Cost: FC = () => {
  return (
    <Container className="py-16 md:py-16">
      <div>
        <div>
          <SubTitle variant="H6" className="leading-[48px] text-[#A8A7A7]">
            Create your song for as low as
          </SubTitle>
          <div>
            <P
              variant="P1"
              className="text-[40px] leading-[60px] text-[#E8E8E84D]"
            >
              $
            </P>
            <h1 className="text-[128px] leading-[128px] font-extralight font-outfit price">
              695
            </h1>
            <Image
              src="/icons/flat-free.svg"
              width={72}
              height={72}
              alt="flat free"
            />
          </div>
          <Button variant="default" size="default">
            Start now
          </Button>
        </div>

        <div>divider</div>

        <div>
          <SubTitle variant="H8" className="text-[#A8A7A7]">
            This fee covers;
          </SubTitle>
          <ul className="list-image-checkmark list-inside flex flex-wrap items-center justify-start gap-x-14">
            {feeCovers.map(({ id, cover }) => (
              <li key={id}>
                <SubTitle
                  variant="H8"
                  className="inline text-primary -ml-[3px]"
                >
                  {cover}
                </SubTitle>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        {feeCoversDetails.map(({ id, title, includes }) => (
          <div key={id}>
            <SubTitle variant="H7" className="text-[#A1A1A2]">
              {title}
            </SubTitle>
            <ul className="list-disc list-inside flex items-center justify-start">
              {includes.map(({ id, include }) => (
                <li key={id}>
                  <P variant="P3" className="inline text-primary -ml-[3px]">
                    {include}
                  </P>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
};
