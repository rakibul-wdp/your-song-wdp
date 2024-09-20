import { P, SubTitle } from "@/components/typography";
import { artists } from "@/mock-db";
import { ArrowRight, Dot } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

export const FiltersResults: FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <SubTitle
          variant="H7"
          className="leading-10 flex items-center justify-start"
        >
          234 Artists for R&B <Dot /> All genders <Dot /> Guitar
        </SubTitle>

        <select name="pets" id="pet-select" className="bg-transparent">
          <option value="">Sort by</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
      </div>

      <div className="w-full grid grid-cols-4 gap-4">
        {artists.slice(4).map(({ id, img, name, title }) => (
          <div className="rounded-3xl" key={id}>
            <Image
              src={img}
              width={264}
              height={264}
              alt={name}
              className="rounded-t-3xl"
            />
            <div>
              <P variant="P1" className="text-[#A1A1A2]">
                {name}
              </P>
              <div className="flex items-center justify-between">
                <P variant="P3" className="text-[#A1A1A2]">
                  {title}
                </P>
                <ArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
