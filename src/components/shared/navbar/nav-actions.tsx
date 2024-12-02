"use client";

import { Button } from "@/components/common";
import { P } from "@/components/typography";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

export interface INavIcons {
  id: number;
  icon: string;
  label: string;
}

export const navIcons: INavIcons[] = [
  {
    id: 1,
    icon: "/icons/search.svg",
    label: "Search",
  },
  {
    id: 2,
    icon: "/icons/user.svg",
    label: "Profile",
  },
  {
    id: 3,
    icon: "/icons/shopping-bag.svg",
    label: "Cart",
  },
];

export const NavActions: FC = () => {
  const router = useRouter();

  return (
    <div className="w-full md:w-fit px-4 md:px-0 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-5 lg:gap-3 xl:gap-[22px]">
      <div className="w-full md:w-fit flex flex-col-reverse md:flex-row items-center justify-center gap-3 lg:gap-2">
        <Button
          variant="outline"
          size="default"
          className="w-full md:w-fit"
          onClick={() => router.push("/")}
        >
          Sign in
        </Button>
        <Button
          variant="default"
          size="default"
          className="w-full md:w-fit"
          onClick={() => router.push("/")}
        >
          Create Your Song
        </Button>
      </div>

      <div className="w-full md:w-fit px-2.5 md:px-0 flex items-center justify-between md:justify-center gap-3 xl:gap-[22px]">
        {navIcons.map(({ id, icon, label }) => (
          <div key={id} className="flex items-center justify-center gap-2.5">
            <Image src={icon} width={20} height={20} alt={label} />
            <P variant="P3" className="md:hidden">
              {label}
            </P>
          </div>
        ))}
      </div>
    </div>
  );
};
