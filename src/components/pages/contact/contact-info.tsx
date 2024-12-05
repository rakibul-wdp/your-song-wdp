import { P } from "@/components/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

interface IArtists {
  id: number;
  icon: string;
  title: string;
}

interface IKeepTouch {
  id: number;
  icon: string;
}

const keepTouch: IKeepTouch[] = [
  {
    id: 1,
    icon: "./icons/keep-touch/touch-fb.svg",
  },
  {
    id: 2,
    icon: "./icons/keep-touch/touch-x.svg",
  },
  {
    id: 3,
    icon: "./icons/keep-touch/touch-ig.svg",
  },
  {
    id: 4,
    icon: "./icons/keep-touch/touch-tk.svg",
  },
  {
    id: 5,
    icon: "./icons/keep-touch/touch-sp.svg",
  },
  {
    id: 6,
    icon: "./icons/keep-touch/touch-dk.svg",
  },
];

const artists: IArtists[] = [
  {
    id: 1,
    icon: "./icons/voice.svg",
    title: "Become an artist",
  },
  {
    id: 2,
    icon: "./icons/groups.svg",
    title: "Community",
  },
  {
    id: 3,
    icon: "./icons/support_agent.svg",
    title: "Help & Support",
  },
];

export const ContactInfo: FC<{ className: string }> = ({ className }) => {
  return (
    <div className={cn("mt-10 lg:mt-24 w-full", className)}>
      <div className="mb-10 w-full flex items-start justify-start">
        <div className="flex-1">
          <P variant="P2" className="text-primary-yellow font-bold mb-2">
            Our Office
          </P>
          <P variant="P3" className="text-[#A1A1A2] font-light mb-4">
            123 main st <br /> San Francisco, CA 90301
          </P>
          <P variant="P3" className="text-[#A1A1A2] font-light">
            555.123.1234 <br />
            hello@yoursong.com
          </P>
        </div>

        <div className="flex-1">
          <P variant="P2" className="text-primary-yellow font-bold mb-2">
            Artists
          </P>

          <div className="flex flex-col items-start justify-center gap-3">
            {artists.map(({ id, icon, title }) => (
              <div className="flex items-center justify-center gap-3" key={id}>
                <Image src={icon} width={24} height={24} alt={title} />
                <P variant="P3" className="text-[#A1A1A2] font-light">
                  {title}
                </P>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <P variant="P2" className="text-primary-yellow font-bold mb-2">
          Keep in touch
        </P>
        <div className="flex items-center justify-start gap-2">
          {keepTouch.map(({ id, icon }) => (
            <div className="py-2.5 px-[15px]" key={id}>
              <Image
                src={icon}
                width={20}
                height={20}
                alt="keep in touch"
                className={cn(id === 1 && "h-6")}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
