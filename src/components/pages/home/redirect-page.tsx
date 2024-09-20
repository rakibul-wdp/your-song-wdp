import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Container } from "../../common";
import { P, SubTitle } from "../../typography";

export const RedirectPage: FC = () => {
  return (
    <Container className="py-16 md:py-20">
      <div className="flex items-center justify-center gap-6">
        <div className={cn("relative", "rounded-3xl")}>
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage: `
              linear-gradient(0deg, #1D1D1F, #1D1D1F),
              linear-gradient(180deg, rgba(29, 29, 31, 0) 32.31%, rgba(29, 29, 31, 0.64) 45.09%, #1D1D1F 100%),
              url('/images/invest.jpeg')
              `,
              backgroundBlendMode: "overlay",
              opacity: 0.5,
              zIndex: -1,
            }}
          ></div>

          <div
            className={cn(
              "relative z-10",
              "flex flex-col items-start justify-center gap-4 md:gap-2",
              "p-10 pt-[230px]"
            )}
          >
            <SubTitle variant="H4">Invest in Music</SubTitle>
            <P variant="P2" className="text-white/50">
              Your investment fuels the best new talent on their rise to the
              top. Collaborate with indie songwriters to inspire and produce a
              one-of-a-kind original song through an engaging process you won’t
              find anywhere else. 
            </P>
            <Link
              href="/pricing"
              className="text-xl leading-6 font-bold font-outfit text-primary-coral"
            >
              Learn More
              <ArrowRight className="" />
            </Link>
          </div>
        </div>

        <div className="bg-[#1D1D1F] rounded-3xl p-10 pt-36">
          <SubTitle variant="H4">Get Your Questions Answered</SubTitle>
          <P variant="P2" className="text-white/50">
            The right song at the right moment makes all the difference. We know
            what you’re thinking: “How can I get more of that in my life?” We
            answer this burning question (and many others) on our FAQ/Contact
            page.
          </P>
          <Link
            href="/contact"
            className="text-xl leading-6 font-bold font-outfit text-primary-coral"
          >
            FAQs
            <ArrowRight className="" />
          </Link>
        </div>
      </div>

      <div className={cn("relative", "rounded-3xl")}>
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `
              linear-gradient(0deg, #1D1D1F, #1D1D1F),
              linear-gradient(180deg, rgba(29, 29, 31, 0) 21.62%, rgba(29, 29, 31, 0.64) 44.29%, #1D1D1F 100%),
              url('/images/impact.jpeg')
              `,
            backgroundBlendMode: "overlay",
            opacity: 0.5,
            zIndex: -1,
          }}
        ></div>

        <div
          className={cn(
            "relative z-10",
            "flex flex-col items-start justify-center gap-4 md:gap-2",
            "p-10 pt-[230px]"
          )}
        >
          <SubTitle variant="H4">From Inspiration to Impact</SubTitle>
          <P variant="P2" className="text-white/50">
            YourSong revolutionizes the trajectory of emerging artists. Our
            platform empowers you to engage in the songwriting process and own
            part of the journey. You receive a custom-made song — and even a
            portion of the royalties. Your investment enables artists to create
            high-quality, impactful songs, while gaining production,
            distribution, and marketing support.
          </P>
          <Link
            href="/pricing"
            className="text-xl leading-6 font-bold font-outfit text-primary-coral"
          >
            Learn More
            <ArrowRight className="" />
          </Link>
        </div>
      </div>
    </Container>
  );
};
