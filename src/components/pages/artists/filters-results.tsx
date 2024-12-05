import { P, SubTitle } from "@/components/typography";
import { artists } from "@/mock-db";
import { ArrowLeft, ArrowRight, Dot } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { Pagination } from "./pagination";

export const FiltersResults: FC = () => {
  return (
    <div className="flex flex-col items-center md:items-start justify-center relative z-10">
      <div className="w-full flex items-center justify-between mb-6 md:mb-8">
        <SubTitle
          variant="H7"
          className="text-base lg:text-2xl flex items-center justify-start"
        >
          234 Artists for R&B <Dot className="w-4 md:w-6" /> All genders{" "}
          <Dot className="w-4 md:w-6" /> Guitar
        </SubTitle>

        <select
          name="pets"
          id="pet-select"
          className="bg-transparent w-20 lg:w-[180px]"
        >
          <option value="">Sort by</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
      </div>

      <div className="w-fit md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {artists.slice(4).map(({ id, img, name, title }) => (
          <div className="rounded-3xl w-full" key={id}>
            <Image
              src={img}
              width={264}
              height={264}
              alt={name}
              className="rounded-t-3xl"
            />
            <div className="pt-4 p-6 w-full flex flex-col items-start justify-center gap-3">
              <P variant="P1" className="text-[#A1A1A2]">
                {name}
              </P>
              <div className="w-full flex items-center justify-between">
                <P variant="P3" className="text-[#A1A1A2]">
                  {title}
                </P>
                <ArrowRight className="text-[#5A5A5B] w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 flex items-center justify-center gap-4">
        <div className="p-2 hover:bg-primary-coral rounded-lg delay-75 transition-all cursor-pointer">
          <ArrowLeft className=" text-[#A1A1A2]" />
        </div>
        <div className="lg:hidden">
          <Pagination isSmallDevice />
        </div>
        <div className="hidden lg:block">
          <Pagination isSmallDevice={false} />
        </div>
        <div className="p-2 hover:bg-primary-coral rounded-lg delay-75 transition-all cursor-pointer">
          <ArrowRight className=" text-[#A1A1A2]" />
        </div>
      </div>
    </div>
  );
};
