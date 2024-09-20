"use client";

import { ArrowDown } from "lucide-react";
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
    <div className="w-full p-4 border rounded-md shadow-lg">
      <div
        onClick={handleToggle}
        className="flex items-center justify-between p-2 cursor-pointer rounded-md"
      >
        <span className="text-lg font-medium">{title}</span>
        <ArrowDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {isOpen && fieldType === "option" && (
        <div className="p-4 max-w-md mx-auto">
          <h2 className="text-lg font-medium mb-4">Select Your Options</h2>
          <div className="grid grid-cols-2 gap-4">
            {fields.map((option) => (
              <div
                key={option.id}
                onClick={() => handleOptionClick(option.id)}
                className={`p-3 border rounded-lg cursor-pointer text-center ${
                  selectedOptions.includes(option.id)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-black"
                }`}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}

      {isOpen && fieldType === "checkbox" && (
        <div className="p-4 max-w-sm mx-auto">
          <h2 className="text-lg font-medium mb-4">Select One Option</h2>
          <div className="space-y-4">
            {fields.map((option) => (
              <label
                key={option.id}
                className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                  selectedOption === option.id
                    ? "bg-blue-500 text-white"
                    : " text-black"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedOption === option.id}
                  onChange={() => handleCheckboxChange(option.id)}
                  className=""
                />
                <span className="ml-2">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
