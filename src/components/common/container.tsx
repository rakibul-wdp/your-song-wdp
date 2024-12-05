import { cn } from "@/lib/utils";
import { FC } from "react";

export const Container: FC<IChildrenClassName> = ({ children, className }) => (
  <section
    className={cn(
      "mx-auto w-full px-4 2xl:px-0 1320px:max-w-screen-1440px 1320px:px-7",
      className
    )}
  >
    {children}
  </section>
);
