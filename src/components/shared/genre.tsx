"use client";

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
    <Container className="py-16 md:py-[120px]">
      <Title variant="H3" className="leading-[72px]">
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
                className="basis-1/5"
                onClick={() => handleSelect(id)}
              >
                <div
                  className={`relative py-10 px-[72px] cursor-pointer rounded-md transition-transform ${
                    selectedGenre === id
                      ? "border-2 border-primary-coral"
                      : "border border-transparent"
                  }`}
                >
                  <Image src={icon} width={80} height={80} alt="genre" />
                  <P variant="P3">{title}</P>

                  {selectedGenre === id && (
                    <div className="absolute top-2 right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        &#10003;
                      </span>
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <Button variant="default" size="default">
        Start Now
      </Button>
    </Container>
  );
};
