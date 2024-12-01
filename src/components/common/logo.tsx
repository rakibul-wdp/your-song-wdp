import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Logo: FC<IClassName> = ({ className }) => (
  <Link href="/" className="">
    <Image
      src="/icons/your-song-logo.svg"
      width={180}
      height={28}
      className={className}
      alt="Your Song Logo"
    />
  </Link>
);
