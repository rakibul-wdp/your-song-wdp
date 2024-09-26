"use client";

import { Logo } from "@/components/common";
import { P } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { socials } from "./db";

export const CompanyInfo: FC = () => {
  return (
    <div className="col-span-2 flex flex-col items-center lg:items-start justify-start gap-1 md:gap-[2px]">
      <Logo />
      <P
        variant="P4"
        className="text-white/65 lg:w-[70%] 1320px:min-w-[250px] text-center lg:text-start"
      >
        orem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac finibus
        quam. Phasellus tempor nunc vel purus cursus, vel pretium neque varius.
      </P>
      <div className="flex items-center justify-start gap-[6.78px] md:gap-[10px]">
        {socials.map(({ id, name, icon, url }) => (
          <Link
            href={url}
            key={id}
            className="bg-[#FFFFFF14] hover:bg-primary-coral delay-75 rounded-full p-3"
          >
            <Image
              src={icon}
              width="16"
              height="16"
              alt={name}
              key={id}
              className="w-4 h-4"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
