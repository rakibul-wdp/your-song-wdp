import Image from "next/image";
import { FC } from "react";
import { Button, Container } from "../common";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../common/carousel";
import { P, SubTitle } from "../typography";

export interface ITestimonials {
  id: number;
  description: string;
}

export const testimonials: ITestimonials[] = [
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit quam turpis. Nunc finibus varius sapien, a dignissim dolor molestie ac. Suspendisse eget ipsum eros. Sed mi elit, viverra nec mi non, vehicula cursus turpis. Praesent a tristique nunc.",
  },
  {
    id: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit quam turpis. Nunc finibus varius sapien, a dignissim dolor molestie ac. Suspendisse eget ipsum eros. Sed mi elit, viverra nec mi non, vehicula cursus turpis. Praesent a tristique nunc. Suspendisse convallis, mi in fringilla pretium, libero quam ultrices velit, sit amet tempor nibh orci eget nibh.",
  },
  {
    id: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit quam turpis. Nunc finibus varius sapien, a dignissim dolor molestie ac.",
  },
  {
    id: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit quam turpis. Nunc finibus varius sapien, a dignissim dolor molestie ac. Suspendisse eget ipsum eros. Sed mi elit, viverra nec mi non, vehicula cursus turpis. Praesent a tristique nunc.",
  },
  {
    id: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit quam turpis. Nunc finibus varius sapien, a dignissim dolor molestie ac. Suspendisse eget ipsum eros. Sed mi elit, viverra nec mi non, vehicula cursus turpis. Praesent a tristique nunc. Suspendisse convallis, mi in fringilla pretium, libero quam ultrices velit, sit amet tempor nibh orci eget nibh.",
  },
];

export const Testimonials: FC = () => {
  return (
    <Container className="py-16 md:py-[120px] flex flex-col items-center justify-center gap-10 md:gap-20">
      <SubTitle variant="H5" className="text-center">
        See What Supporters Are Saying
      </SubTitle>

      <div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map(({ id, description }) => (
              <CarouselItem
                key={id}
                className="basis-[45%] lg:basis-[33%] w-full mx-3 flex flex-col items-start justify-start"
              >
                <div className="w-full flex items-center justify-between mb-6">
                  <Image
                    src="/icons/quote.svg"
                    width={34}
                    height={24}
                    alt="quote"
                  />
                  <div className="flex items-center justify-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Image
                        src="/icons/star.svg"
                        width={24}
                        height={24}
                        alt="star"
                        key={index}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <P variant="P3" className="font-light">
                    {description}
                  </P>
                  <P variant="P2" className="leading-7 text-[#6E6E72] my-6">
                    @MimiG321
                  </P>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <Image
                    src="/icons/play-avatar.svg"
                    width={40}
                    height={40}
                    alt="play avatar"
                  />
                  <div className="flex flex-col items-start justify-between gap-1">
                    <P variant="P3" className="leading-5">
                      Baby, i’m gonna leave you
                    </P>
                    <P variant="P4" className="font-light">
                      by <span className="underline">Arthur Merley</span>
                    </P>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-none" />
          <CarouselNext className="border-none" />
        </Carousel>
      </div>

      <Button variant="default" size="default" className="w-full sm:w-fit">
        Create Your song
      </Button>
    </Container>
  );
};
