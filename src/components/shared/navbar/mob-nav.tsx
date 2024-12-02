"use client";

import {
  Logo,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/common";
import { FC, useState } from "react";
import { NavActions } from "./nav-actions";
import { NavItems } from "./nav-items";

export const MobNav: FC = () => {
  const [mobMenu, setMobMenu] = useState(false);

  return (
    <div className="lg:hidden">
      <SheetTrigger onClick={() => setMobMenu(true)}>
        <figure className="p-2 -mb-2">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18L20 18"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </figure>
      </SheetTrigger>
      <Sheet open={mobMenu} onOpenChange={setMobMenu}>
        <SheetContent className="w-full px-0" onClose={() => setMobMenu(false)}>
          <SheetHeader>
            <SheetTitle className="shadow-custom px-5">
              <Logo />
            </SheetTitle>
            <div className="pt-6 flex flex-col items-center justify-center gap-10">
              <NavItems />
              <NavActions />
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
