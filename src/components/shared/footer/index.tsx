import { Container } from "@/components/common";
import { P, SubTitle } from "@/components/typography";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CompanyInfo } from "./company-info";
import { links } from "./db";

export const Footer = () => {
  return (
    <footer className="w-full py-10 lg:pt-20 lg:pb-10">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-5 items-center lg:items-start justify-between gap-8 lg:gap-14 xl:gap-20">
          <CompanyInfo />

          {Array.from({ length: 3 }).map((_, index) => (
            <div className="min-w-fit flex-1" key={index}>
              <SubTitle variant="H9">Links {index + 1}</SubTitle>
              <div className="space-y-2.5 pt-4 md:pt-6 md:space-y-3">
                {links.map(({ id, label, link }) => (
                  <Link
                    href={link}
                    key={id}
                    className="group block hover:text-primary-coral hover:underline"
                  >
                    <P
                      variant="P4"
                      className="text-white/65 text-secondary transition-all group-hover:text-primary"
                    >
                      {label}
                    </P>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="lg:hidden flex flex-col items-start justify-start gap-6">
            <P variant="P4" className="leading-6 text-white/65">
              Privacy Policy
            </P>
            <P variant="P4" className="leading-6 text-white/65">
              Terms of Service
            </P>
          </div>
        </div>

        <div
          className={cn(
            "mt-10 md:mt-[120px]",
            "flex items-center justify-center lg:justify-between"
          )}
        >
          <P
            variant="P4"
            className="text-white/65 py-[11px] md:pt-[14.5px] md:pb-2 text-center"
          >
            Copyright ® 2024, All rights Reserved.
          </P>

          <div className="hidden lg:block">
            <div className="flex items-center justify-center gap-6">
              <P variant="P4" className="leading-6 text-white/65">
                Privacy Policy
              </P>
              |
              <P variant="P4" className="leading-6 text-white/65">
                Terms of Service
              </P>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
