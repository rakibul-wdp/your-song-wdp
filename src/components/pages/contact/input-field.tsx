import { P } from "@/components/typography";
import { cn } from "@/lib/utils";
import { FC } from "react";

type IInputField = { label: string; type: string };

export const InputField: FC<IInputField> = ({ label, type }) => {
  return (
    <div className="">
      <label htmlFor="email" className="px-1">
        <P variant="P1">{label}</P>
      </label>
      <input
        type={type}
        id={type}
        className={cn(
          "bg-[#282829] rounded w-full py-[13px] md:py-[18px] px-3 md:px-4",
          label === "I need info about" && "hidden"
        )}
      />

      <select
        name="pets"
        id="pet-select"
        className={cn(
          "bg-[#282829] border border-secondary/30 rounded w-full h-full py-[13px] md:py-[18px] px-3 md:px-4",
          label !== "I need info about" && "hidden"
        )}
      >
        <option value="">Sort by</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>

      <textarea
        name="Message"
        id=""
        className={cn(
          "bg-[#282829] rounded w-full py-[13px] md:py-[18px] px-3 md:px-4",
          label !== "Message" && "hidden"
        )}
      ></textarea>
    </div>
  );
};
