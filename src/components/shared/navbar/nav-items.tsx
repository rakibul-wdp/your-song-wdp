"use client";

import { P } from "@/components/typography";
import { useActivePath } from "@/hooks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { homeNavItems } from "./db";

export const NavItems: FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [clickedSection, setClickSection] = useState<string | null>(null);
  const pathname = usePathname();
  const isActive = useActivePath();

  useEffect(() => {
    if (pathname.length > 1) setClickSection(null);
  }, [pathname.length]);

  return (
    <div className="flex flex-col items-center lg:flex-row justify-center gap-8 lg:gap-5 xl:gap-14">
      {homeNavItems.map(({ href, name, id }, i) => (
        <Link
          href={href}
          key={i}
          className={cn(
            "relative w-full text-center px-[25px] lg:px-0 lg:w-fit"
          )}
          onClick={() => setClickSection(name)}
          onMouseEnter={() => setHoverIndex(id)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <P
            variant="P4"
            className={cn(
              "hidden lg:block font-bold leading-4",
              isActive(href) || hoverIndex === id || clickedSection === name
                ? "text-primary-coral"
                : ""
            )}
          >
            {name}
          </P>
          <P
            variant="P3"
            className={cn(
              "lg:hidden w-full mx-auto",
              "font-medium",
              isActive(href) && "text-primary-coral"
            )}
          >
            {name}
          </P>
        </Link>
      ))}
    </div>
  );
};
