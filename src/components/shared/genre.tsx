"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";
import { FC, useState } from "react";
import { Button, Container } from "../common";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../common/carousel";
import { P, Title } from "../typography";

export interface IGenres {
  id: number;
  icon: string;
  title: string;
}

export const genres: IGenres[] = [
  {
    id: 1,
    icon: "/icons/genres/genre-1.svg",
    title: "Alternative rock",
  },
  {
    id: 2,
    icon: "/icons/genres/genre-2.svg",
    title: "Hip-Hop/Rap",
  },
  {
    id: 3,
    icon: "/icons/genres/genre-3.svg",
    title: "R&B/Soul",
  },
  {
    id: 4,
    icon: "/icons/genres/genre-4.svg",
    title: "Rock",
  },
  {
    id: 5,
    icon: "/icons/genres/genre-5.svg",
    title: "Pop",
  },
  {
    id: 6,
    icon: "/icons/genres/genre-6.svg",
    title: "Country",
  },
  {
    id: 7,
    icon: "/icons/genres/genre-7.svg",
    title: "Latin",
  },
  {
    id: 8,
    icon: "/icons/genres/genre-8.svg",
    title: "Dance/Electronic",
  },
  {
    id: 9,
    icon: "/icons/genres/genre-9.svg",
    title: "Christian/Gospel",
  },
  {
    id: 10,
    icon: "/icons/genres/genre-10.svg",
    title: "Blues/Jazz",
  },
  {
    id: 11,
    icon: "/icons/genres/genre-11.svg",
    title: "Metal/Hard Rock",
  },
  {
    id: 12,
    icon: "/icons/genres/genre-12.svg",
    title: "Folk/Americana",
  },
];

export const Genre: FC = () => {
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    setSelectedGenre((prev) => (prev === id ? null : id));
  };

  return (
    <Container
      className={cn(
        "py-16 md:py-[120px]",
        "flex flex-col items-center justify-center",
        "relative"
      )}
    >
      <Image
        className="absolute inset-0 top-7 md:top-5 left-[100%] z-0 pointer-events-none"
        src="./icons/bg-icon/home-bg-icon-4.svg"
        width={150}
        height={150}
        alt="home bg icon one"
      />
      <Image
        className="absolute inset-0 top-[90%] md:top-5 left-0 z-0 pointer-events-none"
        src="./icons/bg-icon/home-bg-icon-5.svg"
        width={50}
        height={50}
        alt="home bg icon one"
      />
      <Title
        variant="H3"
        className="leading-[44.8px] md:leading-[72px] text-center"
      >
        Pick a Genre. Produce a Song.
      </Title>

      <div className="py-10 md:py-20">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {genres.map(({ id, icon, title }) => (
              <CarouselItem
                key={id}
                className="basis-[20%]"
                onClick={() => handleSelect(id)}
              >
                <div
                  className={cn(
                    "py-10 border rounded-2xl",
                    "flex flex-col items-center justify-center gap-6",
                    "relative cursor-pointer transition-transform",
                    selectedGenre === id
                      ? "border-2 border-primary-coral"
                      : "border border-transparent"
                  )}
                >
                  <Image src={icon} width={80} height={80} alt="genre" />
                  <P variant="P3">{title}</P>

                  {selectedGenre === id && (
                    <div className="absolute -top-0.5 -right-0.5 w-10 h-10 p-3 bg-red-500 rounded-full flex items-center justify-center">
                      <Check className="text-white w-5 h-5" />
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-none" />
          <CarouselNext className="border-none" />
        </Carousel>
      </div>

      <Button variant="default" size="default" className="w-full sm:w-fit">
        Start Now
      </Button>
    </Container>
  );
};
