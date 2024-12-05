import { Button, Container } from "@/components/common";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/common/carousel";
import { P, SubTitle } from "@/components/typography";
import { cn } from "@/lib/utils";
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
    <Container
      className={cn(
        "py-16 md:py-16",
        "flex flex-col items-center justify-center gap-y-6"
      )}
    >
      <div
        className={cn(
          "lg:max-w-[957px] w-full flex flex-col md:flex-row items-start md:items-center justify-center md:gap-16",
          "rounded-[32px] py-4 md:py-12 px-6 lg:px-[78px]"
        )}
        style={{
          backgroundImage: `
          url('/icons/yellow.svg'),
          url('/icons/red.svg'),
          url('/icons/green.svg')
          `,
          backgroundPosition: "left bottom, left top, right top",
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
        }}
      >
        <div className="flex flex-col items-center justify-center gap-6">
          <SubTitle
            variant="H6"
            className="leading-[48px] text-[#A8A7A7] text-center"
          >
            Create your song for as low as
          </SubTitle>
          <div className="relative flex items-center justify-center gap-2">
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
              className="absolute top-0 -right-7"
            />
          </div>
          <Button
            variant="default"
            size="default"
            className="w-full sm:w-[60%]"
          >
            Start now
          </Button>
        </div>

        <hr className="w-full md:w-[1px] h-[1px] md:h-48 bg-[#A1A1A2] rounded my-6 md:my-10" />

        <div>
          <SubTitle variant="H8" className="text-[#A8A7A7] mb-5">
            This fee covers;
          </SubTitle>
          <ul className="list-image-checkmark list-inside flex flex-col items-start justify-center gap-5">
            {feeCovers.map(({ id, cover }) => (
              <li key={id}>
                <SubTitle
                  variant="H8"
                  className="inline text-[#FFCAC5] font-medium -ml-[3px] -mb-2"
                >
                  {cover}
                </SubTitle>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={cn("lg:max-w-[957px] w-full")}>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {feeCoversDetails.map(({ id, title, includes }) => (
              <CarouselItem
                key={id}
                className="basis-[88%] sm:basis-[60%] md:basis-[30%] w-full mx-6 flex flex-col items-start justify-center gap-10 py-12 px-6"
                style={{
                  backgroundImage: `
                  ${
                    id === 1
                      ? "url('/icons/cost-red.svg')"
                      : id === 2
                      ? "url('/icons/cost-green.svg')"
                      : "url('/icons/cost-blue.svg')"
                  }
                  `,
                  backgroundPosition: "left",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <SubTitle variant="H7" className="text-[#A1A1A2]">
                  {title}
                </SubTitle>
                <ul className="list-disc list-inside flex flex-col items-start justify-start">
                  {includes.map(({ id, include }) => (
                    <li key={id}>
                      <P variant="P3" className="inline text-primary -ml-[3px]">
                        {include}
                      </P>
                    </li>
                  ))}
                </ul>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Container>
  );
};
