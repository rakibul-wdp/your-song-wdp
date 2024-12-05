"use client";

import { Container } from "@/components/common";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/common/carousel";
import { Tab, TabList, Tabs } from "@/components/common/tabs";
import { P, SubTitle } from "@/components/typography";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
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
    <Container
      className={cn(
        "py-16 md:py-[120px]",
        "flex flex-col items-center justify-center gap-10 md:gap-16"
      )}
    >
      <div className="flex flex-col text-center items-center justify-center gap-4">
        <SubTitle variant="H5">Curious? Want to Learn More?</SubTitle>
        <P variant="P2" className="leading-10 text-[#A1A1A2]">
          Get answers to the most frequently asked questions about YourSong
          here.
        </P>
      </div>

      <Tabs className="w-full flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-20">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full lg:hidden"
        >
          <CarouselContent>
            <TabList className="space-x-0">
              {categories.map(({ id, title }) => (
                <CarouselItem key={id} className="basis-1/1">
                  <Tab
                    isActive={activeIndex === id}
                    onClick={() => setActiveIndex(id)}
                    className="w-full bg-transparent p-0 m-0"
                  >
                    <div
                      onClick={handleToggle}
                      className="flex items-center justify-between cursor-pointer rounded-md"
                    >
                      <P
                        variant="P2"
                        className={cn(
                          "leading-8",
                          activeIndex === id
                            ? "text-primary-coral"
                            : "text-[#5A5A5B]"
                        )}
                      >
                        {title}
                      </P>
                    </div>
                  </Tab>
                </CarouselItem>
              ))}
            </TabList>
          </CarouselContent>
        </Carousel>

        <TabList
          className={cn(
            "hidden lg:block min-w-[300px] space-x-0",
            "lg:flex lg:flex-col lg:items-start lg:justify-center gap-4"
          )}
        >
          <P variant="P2" className="text-[#A1A1A2] font-semibold">
            Categories
          </P>
          {categories.map(({ id, title }) => (
            <Tab
              isActive={activeIndex === id}
              onClick={() => setActiveIndex(id)}
              key={id}
              className="w-full bg-transparent p-0 m-0"
            >
              <div
                onClick={handleToggle}
                className="flex items-center justify-between cursor-pointer rounded-md"
              >
                <P
                  variant="P2"
                  className={cn(
                    "leading-8",
                    activeIndex === id ? "text-primary-coral" : "text-[#5A5A5B]"
                  )}
                >
                  {title}
                </P>
                <div
                  className={cn(
                    "p-0.5 rounded-full",
                    activeIndex === id ? "bg-primary-coral" : "bg-[#383838]"
                  )}
                >
                  <ChevronRight
                    className={`transition-transform text-black h-5 w-5 ${
                      activeIndex === id ? "" : "rotate-180"
                    }`}
                  />
                </div>
              </div>
            </Tab>
          ))}
        </TabList>

        {isOpen && activeIndex === 1 && <FAQA activeIndex={activeIndex} />}

        {/* {Array.from({ length: 5 }).map((_, index) => (
          <TabPanel isActive={activeIndex === index + 2} key={index}>
            <h2>Any content {index + 2}</h2>
          </TabPanel>
        ))} */}
      </Tabs>
    </Container>
  );
};
