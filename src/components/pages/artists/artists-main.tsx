import { Container } from "@/components/common";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { Filters } from "./filters";
import { FiltersResults } from "./filters-results";

export const ArtistsMain: FC = () => {
  return (
    <Container
      className={cn("py-10 md:py-16", "flex items-start justify-center gap-12")}
    >
      <Filters />
      <FiltersResults />
    </Container>
  );
};
