import { FC } from "react";
import { Button } from "../common";

export const HomeHero: FC = () => {
  return (
    <section className="pt-[54px] md:pt-[95px]">
      <Button variant="default" size="default">
        Click Me
      </Button>

      <Button variant="outline" size="default">
        Click Me 2
      </Button>
    </section>
  );
};
