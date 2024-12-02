"use client";

import { Logo } from "@/components/common";
import { cn } from "@/lib/utils";
import { FC, useEffect, useState } from "react";
import { MobNav } from "./mob-nav";
import { NavActions } from "./nav-actions";
import { NavItems } from "./nav-items";

export const Navbar: FC = () => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined")
      setActive(window.scrollY > 0 ? true : false);
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () =>
      setActive(window.scrollY > 0 ? true : false)
    );
  }

  return (
    <div
      className={cn(
        "fixed flex w-screen items-center justify-center py-[18px] md:py-4 px-5 md:px-10 xl:px-20",
        "bg-transparent transition-all duration-100 top-0 z-50",
        active && "bg-[#141416] shadow"
      )}
    >
      <nav
        className={cn(
          "1700px:max-w-screen-1700px mx-auto flex w-full items-center justify-between transition-all duration-100",
          active && ""
        )}
      >
        <Logo />

        <div className="flex items-center justify-center gap-5 xl:gap-10">
          <div className="hidden lg:block">
            <NavItems />
          </div>

          <div className="hidden md:block">
            <NavActions />
          </div>

          <MobNav />
        </div>
      </nav>
    </div>
  );
};
