"use client";

import { P, SubTitle } from "@/components/typography";
import { cn } from "@/lib/utils";
import { ChevronDown, Plus } from "lucide-react";
import { FC, useState } from "react";

interface IFields {
  id: number;
  label: string;
}
interface FilterSectionProps {
  title: string;
  fields: IFields[];
  fieldType: string;
}

export const FilterSection: FC<FilterSectionProps> = ({
  title,
  fields,
  fieldType,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (id: number) => {
    setSelectedOptions((prev) =>
      prev.includes(id)
        ? prev.filter((optionId) => optionId !== id)
        : [...prev, id]
    );
  };

  const handleCheckboxChange = (id: number) => {
    setSelectedOption((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full min-w-[288px] max-w-[288px] p-6 rounded-md shadow-lg relative z-10">
      <div
        onClick={handleToggle}
        className="flex items-center justify-between gap-[80px] cursor-pointer rounded-md"
      >
        <SubTitle
          variant="H8"
          className="leading-7 font-semibold text-[#A1A1A2]"
        >
          {title}
        </SubTitle>
        <ChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {isOpen && fieldType === "option" && (
        <div className="pt-4">
          <div className="flex flex-wrap items-start justify-start gap-2">
            {fields.map((option) => (
              <div
                key={option.id}
                onClick={() => handleOptionClick(option.id)}
                className={`p-2 rounded-lg cursor-pointer text-center flex items-center justify-center gap-2 ${
                  selectedOptions.includes(option.id)
                    ? "bg-primary-coral text-white"
                    : "bg-[#23262F] text-[#A1A1A2]"
                }`}
              >
                <P variant="P3" className="leading-4">
                  {option.label}
                </P>
                <Plus
                  className={cn(
                    "w-4 h-4 text-[#A1A1A2]",
                    selectedOptions.includes(option.id) ? "hidden" : "block"
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {isOpen && fieldType === "checkbox" && (
        <div className="pt-4">
          <div className="space-y-4">
            {fields.map((option) => (
              <label
                key={option.id}
                className={`flex items-center p-[11px] rounded-lg cursor-pointer ${
                  selectedOption === option.id
                    ? "bg-primary-coral text-white"
                    : " text-[#A1A1A2]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedOption === option.id}
                  onChange={() => handleCheckboxChange(option.id)}
                  className={cn(
                    "w-5 h-5 border-2 cursor-pointer border-[#A1A1A2] rounded-sm checked:bg-no-repeat checked:bg-center checked:border-none checked:bg-white",
                    selectedOption === option.id ? "" : "appearance-none"
                  )}
                />
                <P variant="P3" className="leading-4 ml-5">
                  {option.label}
                </P>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
