import { Container } from "@/components/common";
import { P, SubTitle } from "@/components/typography";
import Link from "next/link";
import { CompanyInfo } from "./company-info";
import { links } from "./db";

export const Footer = () => {
  return (
    <footer className="w-full pt-6 md:pt-[72px]">
      <Container>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-0">
          <CompanyInfo />

          <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-y-[31px] lg:gap-y-0">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="min-w-fit" key={index}>
                <SubTitle variant="H9">Links {index + 1}</SubTitle>
                <div className="space-y-2.5 pt-4 md:pt-6 md:space-y-3">
                  {links.map(({ id, label, link }) => (
                    <Link
                      href={link}
                      key={id}
                      className="group block transition-all delay-100"
                    >
                      <P
                        variant="P4"
                        className="text-white/65 text-secondary transition-all delay-100 group-hover:text-primary"
                      >
                        {label}
                      </P>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="mt-[50px] md:mt-10">
        <P
          variant="P4"
          className="text-white/65 py-[11px] md:pt-[14.5px] md:pb-2 text-center"
        >
          Copyright ® 2024, All rights Reserved.
        </P>

        <div>
          <P variant="P4" className="leading-6 text-white/65">
            Privacy Policy
          </P>
          |
          <P variant="P4" className="leading-6 text-white/65">
            Terms of Service
          </P>
        </div>
      </div>
    </footer>
  );
};
