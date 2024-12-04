"use client";

import { Container } from "@/components/common";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/common/carousel";
import { Tab, TabList, TabPanel, Tabs } from "@/components/common/tabs";
import { P, SubTitle } from "@/components/typography";
import { ArrowRight } from "lucide-react";
import { FC, useState } from "react";
import { FAQA } from "./faqa";

export interface ICategories {
  id: number;
  title: string;
}

export const categories: ICategories[] = [
  {
    id: 1,
    title: "Commissioning Your Song",
  },
  {
    id: 2,
    title: "Purchasing Your Song",
  },
  {
    id: 3,
    title: "Using Your Song",
  },
  {
    id: 4,
    title: "About Your Song",
  },
  {
    id: 5,
    title: "Earnings",
  },
  {
    id: 6,
    title: "FAQ’s for Artists",
  },
];

export const FAQ: FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(true);
  };

  return (
    <Container className="py-16 md:py-[120px]">
      <div className="flex flex-col items-center justify-center gap-4">
        <SubTitle variant="H5">Curious? Want to Learn More?</SubTitle>
        <P variant="P2" className="leading-10 text-[#A1A1A2]">
          Get answers to the most frequently asked questions about YourSong
          here.
        </P>
      </div>

      <Tabs>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full md:hidden"
        >
          <CarouselContent>
            <TabList>
              {categories.map(({ id, title }) => (
                <CarouselItem key={id} className="basis-1/1">
                  <Tab
                    isActive={activeIndex === id}
                    onClick={() => setActiveIndex(id)}
                  >
                    <div
                      onClick={handleToggle}
                      className="flex items-center justify-between p-2 cursor-pointer rounded-md"
                    >
                      <span className="text-lg font-medium">{title}</span>
                      <ArrowRight
                        className={`transition-transform ${
                          activeIndex === id ? "" : "rotate-180"
                        }`}
                      />
                    </div>
                  </Tab>
                </CarouselItem>
              ))}
            </TabList>
          </CarouselContent>
        </Carousel>

        <TabList className="hidden md:block">
          {categories.map(({ id, title }) => (
            <Tab
              isActive={activeIndex === id}
              onClick={() => setActiveIndex(id)}
              key={id}
            >
              <div
                onClick={handleToggle}
                className="flex items-center justify-between p-2 cursor-pointer rounded-md"
              >
                <span className="text-lg font-medium">{title}</span>
                <ArrowRight
                  className={`transition-transform ${
                    activeIndex === id ? "" : "rotate-180"
                  }`}
                />
              </div>
            </Tab>
          ))}
        </TabList>

        {isOpen && activeIndex === 1 && <FAQA activeIndex={activeIndex} />}

        {Array.from({ length: 5 }).map((_, index) => (
          <TabPanel isActive={activeIndex === index + 2} key={index}>
            <h2>Any content {index + 2}</h2>
          </TabPanel>
        ))}
      </Tabs>
    </Container>
  );
};
