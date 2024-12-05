import { Container } from "@/components/common";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { Filters } from "./filters";
import { FiltersResults } from "./filters-results";
import Image from "next/image";

export const ArtistsMain: FC = () => {
  return (
    <Container
      className={cn(
        "py-10 md:py-16",
        "flex flex-col md:flex-row items-center md:items-start justify-center gap-12",
        "relative"
      )}
    >
      <Image
        className="absolute inset-0 -top-[1.5%] md:-top-[3%] left-[60%] md:left-[75%] z-0 pointer-events-none rotate-90"
        src="./icons/bg-icon/artist-bg-1.svg"
        width={150}
        height={150}
        alt="home bg icon one"
      />
      <Filters />
      <FiltersResults />
    </Container>
  );
};
