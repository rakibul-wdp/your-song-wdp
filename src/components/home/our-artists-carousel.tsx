"use client";

import { artists } from "@/mock-db";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { Button } from "../common";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../common/carousel";
import { Tab, TabList, TabPanel, Tabs } from "../common/tabs";
import { P } from "../typography";

export interface ITabs {
  id: number;
  title: string;
}

export const tabs: ITabs[] = [
  {
    id: 1,
    title: "Pop",
  },
  {
    id: 2,
    title: "Reggae",
  },
  {
    id: 3,
    title: "Country",
  },
  {
    id: 4,
    title: "R&B",
  },
  {
    id: 5,
    title: "Hip-Hop",
  },
  {
    id: 6,
    title: "Salsa",
  },
  {
    id: 7,
    title: "Electro",
  },
  {
    id: 8,
    title: "Rock",
  },
];

export const OurArtistsCarousel: FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const router = useRouter();

  return (
    <div>
      <Tabs>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            <TabList>
              {tabs.map(({ id, title }) => (
                <CarouselItem key={id} className="basis-1/1">
                  <Tab
                    isActive={activeIndex === id}
                    onClick={() => setActiveIndex(id)}
                  >
                    {title}
                  </Tab>
                </CarouselItem>
              ))}
            </TabList>
          </CarouselContent>
        </Carousel>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            <TabPanel
              className="flex items-center justify-center gap-6"
              isActive={activeIndex === 1}
            >
              {artists.slice(0, 6).map(({ id, img, name, title }) => (
                <CarouselItem key={id} className="basis-1/1">
                  <div className="rounded-3xl">
                    <Image
                      src={img}
                      width={264}
                      height={264}
                      alt={name}
                      className="rounded-t-3xl"
                    />
                    <div>
                      <P variant="P1" className="text-[#A1A1A2]">
                        {name}
                      </P>
                      <div className="flex items-center justify-between">
                        <P variant="P3" className="text-[#A1A1A2]">
                          {title}
                        </P>
                        <ArrowRight />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </TabPanel>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Button
          variant="default"
          size="default"
          onClick={() => router.push("/artists")}
        >
          View all artists
        </Button>

        {Array.from({ length: 7 }).map((_, index) => (
          <TabPanel isActive={activeIndex === index + 2} key={index}>
            <h2>Any content {index + 2}</h2>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};
