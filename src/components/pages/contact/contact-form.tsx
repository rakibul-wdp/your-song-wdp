import { Button, Container } from "@/components/common";
import { P, Title } from "@/components/typography";
import Image from "next/image";
import { FC } from "react";
import { InputField } from "./input-field";

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

export const ContactForm: FC = () => {
  return (
    <Container className="py-16 md:py-[120px]">
      <div>
        <Title variant="H1">Let’s talk</Title>

        <P variant="P1" className="leading-9 text-[#5A5A5B]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          hendrerit quam turpis. Nunc finibus varius sapien, a dignissim dolor
          molestie ac. <br />{" "}
          <span className="font-semibold text-white">info@yoursong.com</span>
        </P>

        <div>
          <div>
            <P variant="P2" className="text-primary-yellow font-bold">
              Our Office
            </P>
            <P variant="P3" className="text-[#A1A1A2] font-light">
              123 main st <br /> San Francisco, CA 90301
            </P>
            <P variant="P3" className="text-[#A1A1A2] font-light">
              555.123.1234 <br />
              hello@yoursong.com
            </P>
          </div>

          <div>
            <P variant="P2" className="text-primary-yellow font-bold">
              Artists
            </P>

            <div>
              {artists.map(({ id, icon, title }) => (
                <div key={id}>
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
          <P variant="P2" className="text-primary-yellow font-bold">
            Keep in touch
          </P>
          <div className="flex items-center justify-start">
            {keepTouch.map(({ id, icon }) => (
              <div key={id}>
                <Image src={icon} width={20} height={20} alt="keep in touch" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <form>
        <div className="flex items-center justify-center gap-4">
          <InputField label="First name" type="text" />
          <InputField label="Last name" type="text" />
        </div>
        <div className="flex items-center justify-center gap-4">
          <InputField label="Email" type="email" />
          <InputField label="Phone number" type="text" />
        </div>
        <InputField label="I need info about" type="" />
        <InputField label="Message" type="text" />

        <Button variant="default" size="default" className="w-full">
          Send
        </Button>
      </form>
    </Container>
  );
};
