"use client";

import { cn } from "@/lib/utils";
import { artists } from "@/mock-db";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { Button } from "../../common";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../common/carousel";
import { Tab, TabList, TabPanel, Tabs } from "../../common/tabs";
import { P, SubTitle } from "../../typography";

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
      <Tabs className="flex flex-col items-center justify-center">
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
                    className={cn(
                      "bg-transparent w-[180px] py-2 rounded-none",
                      activeIndex === id && "border-b-2 border-b-primary-green"
                    )}
                  >
                    <SubTitle variant="H8" className="leading-10">
                      {title}
                    </SubTitle>
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
          className="w-full my-10 md:my-[60px]"
        >
          <CarouselContent>
            <TabPanel
              className="flex items-center justify-center gap-6"
              isActive={activeIndex === 1}
            >
              {artists.slice(0, 6).map(({ id, img, name, title }) => (
                <CarouselItem key={id} className="basis-1/6">
                  <div className="rounded-3xl">
                    <Image
                      src={img}
                      width={264}
                      height={264}
                      alt={name}
                      className="rounded-t-3xl"
                    />
                    <div className="pt-4 p-6 w-full flex flex-col items-start justify-center gap-3">
                      <P variant="P1" className="text-[#A1A1A2]">
                        {name}
                      </P>
                      <div className="w-full flex items-center justify-between">
                        <P variant="P3" className="text-[#A1A1A2]">
                          {title}
                        </P>
                        <ArrowRight className="text-[#5A5A5B] w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </TabPanel>
          </CarouselContent>
          <CarouselPrevious className="border-none" />
          <CarouselNext className="border-none" />
        </Carousel>

        <Button
          variant="default"
          size="default"
          className="w-full sm:w-fit"
          onClick={() => router.push("/artists")}
        >
          View all artists
        </Button>

        {/* {Array.from({ length: 7 }).map((_, index) => (
          <TabPanel isActive={activeIndex === index + 2} key={index}>
            <h2>Any content {index + 2}</h2>
          </TabPanel>
        ))} */}
      </Tabs>
    </div>
  );
};
