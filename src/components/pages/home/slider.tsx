"use client";

import { ArrowRight } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { P, SubTitle, Title } from "../../typography";

export interface ISliders {
  id: number;
  img: string;
  title: string;
  description: string;
  timeFrame: string;
}

export const sliders: ISliders[] = [
  {
    id: 1,
    img: "/images/slider-img-1.png",
    title: "Commission your song",
    description:
      "Think about what subjects make your heart sing and what sounds stir your soul. Listen to some of our artists to get a feel for the emerging music scene. Complete our interactive song commission form about the song you’d like to have an artist create. Let us know if you have any artist preferences. Otherwise, we can find the best available match",
    timeFrame: "< 1 Day",
  },
  {
    id: 2,
    img: "/images/slider-img-2.png",
    title: "Meet your artist",
    description:
      "Once your commission is accepted, we’ll set up a time where you can meet the artist to discuss your preferences and collaborate in a fun, interactive video call. Ask questions. Get to know the artist. Have your voice heard. This is your VIP all access backstage pass—where all the magic happens!",
    timeFrame: "5 days",
  },
  {
    id: 3,
    img: "/images/slider-img-3.png",
    title: "In the studio",
    description:
      "The artist hits the studio, writing a one-of-a-kind song based on your feedback.The song goes through several layers of quality control as well as professional sound engineering, mixing, and mastering.",
    timeFrame: "5 days",
  },
  {
    id: 4,
    img: "/images/slider-img-4.png",
    title: "Track your song",
    description:
      "Track the process every step of the way through your personal studio dashboard",
    timeFrame: "1 week",
  },
  {
    id: 5,
    img: "/images/slider-img-5.png",
    title: "Publish your song",
    description:
      "Once your song’s finished, it’ll go live on Amazon Music, Apple Music, Spotify and all other major streaming services. Collect royalties* on your song.",
    timeFrame: "3+ years",
  },
  {
    id: 6,
    img: "/images/slider-img-6.png",
    title: "Stay in touch",
    description:
      "As a YourSong investor, you’ll be the first to know when your commissioned artist(s) go on tour, release a new song, or announce major news. Enjoy exclusive discounts, VIP access to events, and other perks for being part of the scene.",
    timeFrame: "Forever",
  },
];

export const Slider: FC = () => {
  const [activeCard, setActiveCard] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev === 6 ? 1 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center gap-2 overflow-hidden">
      {sliders.map(({ id, img, title, description, timeFrame }) => (
        <div
          key={id}
          className={`transition-all duration-500 ease-in-out 
          ${activeCard === id ? "flex-[5] bg-red-500" : "flex-[1] bg-gray-700"} 
          rounded-md cursor-pointer flex justify-center items-center text-white`}
          style={{
            backgroundImage: `url(${img})`,
          }}
          onClick={() => setActiveCard(id)}
        >
          {activeCard === id ? (
            <div className="text-center">
              <Title variant="H4">0{id}</Title>
              <P variant="P3">Step {id} / 6</P>
              <SubTitle variant="H4">{title}</SubTitle>
              <P variant="P3">{description}</P>
              <P variant="P3" className="uppercase">
                TimeFrame
              </P>
              <SubTitle variant="H7" className="leading-9">
                {timeFrame}
              </SubTitle>
              <h2 className="text-xl font-bold">Card {id}</h2>
              <p className="mt-2">This is the content of Card {id}</p>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <SubTitle variant="H4" className="leading-[64px]">
                0{id}
              </SubTitle>
              <ArrowRight />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
