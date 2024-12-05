import { Button, Container } from "@/components/common";
import { P, Title } from "@/components/typography";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { ContactInfo } from "./contact-info";
import { InputField } from "./input-field";

export const ContactForm: FC = () => {
  return (
    <Container
      className={cn(
        "pt-[139px] pb-16 lg:pt-[202px] lg:pb-[120px]",
        "flex flex-col lg:flex-row items-center justify-center lg:gap-10 xl:gap-60"
      )}
    >
      <div className="">
        <Title variant="H1">Let’s talk</Title>

        <P variant="P1" className="leading-9 text-[#5A5A5B] mt-6 lg:mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          hendrerit quam turpis. Nunc finibus varius sapien, a dignissim dolor
          molestie ac. <br />
          <br />
          <span className="font-semibold text-white">info@yoursong.com</span>
        </P>

        <ContactInfo className="hidden lg:block" />
      </div>

      <form className="w-full">
        <div className="w-full flex items-center justify-between gap-8 lg:gap-x-4 mb-8">
          <InputField label="First name" type="text" />
          <InputField label="Last name" type="text" />
        </div>
        <div className="w-full flex items-center justify-between gap-8 lg:gap-4 mb-8">
          <InputField label="Email" type="email" />
          <InputField label="Phone number" type="text" />
        </div>
        <div className="mb-8">
          <InputField label="I need info about" type="" />
        </div>
        <InputField label="Message" type="text" />

        <Button variant="default" size="default" className="w-full mt-8">
          Send
        </Button>
      </form>

      <ContactInfo className="lg:hidden" />
    </Container>
  );
};
